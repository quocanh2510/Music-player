// Khai báo tất cả biến ở đây
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist')
const menu = $('.menu')
const close = $('.close')
const sidebar = $('.sidebar')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play') 
const player = $('.player')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const random = $('.btn-random')
const repeat = $('.btn-repeat')
const mute = $('.mute')
const volumeHigh = $('.volume-high')
const volume = $('.volume-progress')

const app = {
    currentIndex: 0,
    songs: [
        {
            name: 'When I Get Old',
            singer: 'Christopher ft Chung Ha',
            path: './assets/music/Christopher_Chung_Ha_When_I_Get_Old.mp3',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2022/10/20/2/4/1/e/1666255166384_640.jpg'
        },
        {
            name: 'Know Me Too Well',
            singer: 'New Hope Club ft Danna Paola',
            path: './assets/music/New Hope Club Danna Paola Know Me Too Well.mp3',
            image: 'https://data.chiasenhac.com/data/cover/117/116022.jpg'
        },
        {
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3',
            image: './assets/img/muon-roi-ma-sao-con.jpg'
        },
        {
            name: 'Ai Biết',
            singer: 'WEAN',
            path: './assets/music/AiBiet-WEAN-6061846.mp3',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2019/09/03/9/8/e/f/1567498868420_640.jpg'
        },
        {
            name: 'Buồn Không Thể Buông',
            singer: 'Trung Quân Idol',
            path: './assets/music/BuonKhongTheBuong-TrungQuanIdol.mp3',
            image: 'https://images.genius.com/234e068aca509ec5c43c435cf10d9928.600x600x1.jpg'
        },
        {
            name: 'Chạy Khỏi Thế Giới Này',
            singer: 'Dalab ft Phương Ly',
            path: './assets/music/ChayKhoiTheGioiNay-DaLABPhuongLy.mp3',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/b/9/6/5b96fdda0362a6b85fe54c4ce1d58e0b.jpg'
        },
        {
            name: 'Chìm Sâu',
            singer: 'MCK ft Trung Trần',
            path: './assets/music/ChimSau-MCKTrungTran.mp3',
            image: 'https://i1.sndcdn.com/artworks-XWhy73hN7XntEFlJ-rBzgxg-t500x500.jpg'
        },
        {
            name: 'Chưa Quên Người Yêu Cũ',
            singer: 'Hà Nhi',
            path: './assets/music/ChuaQuenNguoiYeuCu-HaNhi.mp3',
            image: 'https://i.scdn.co/image/ab67616d0000b2735724414710cbb0b7623a977c'
        },
        {
            name: 'Chúng Ta Của Hiện Tại',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/ChungTaCuaHienTaiCM1XLofiVersion-SonTungMTPCM1X.mp3',
            image: 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d'
        },
        {
            name: 'Chuyện Đôi Ta',
            singer: 'Dalab ft EmceeL',
            path: './assets/music/ChuyenDoiTa-EmceeLDaLAB.mp3',
            image: 'https://i.scdn.co/image/ab67616d0000b273a400211178f6d590d875f2da'
        },
        {
            name: 'Em Là',
            singer: 'MONO',
            path: './assets/music/EmLa-MONOOnionn.mp3',
            image: 'https://pic-bstarstatic.akamaized.net/ugc/5ba6a14bd3c1a2d0544bf23e7e8b706a.jpg'
        },
        {
            name: 'Năm Ngoái Giờ Này',
            singer: 'Phùng Khánh Linh',
            path: './assets/music/NamNgoaiGioNay-PhungKhanhLinh.mp3',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/b/d/e/7bde9ab0c8434e2e3328763e4df5bac3.jpg'
        },
        {
            name: 'Và Ngày Nào Đó',
            singer: 'Trung Quân Idol',
            path: './assets/music/VaNgayNaoDo-TrungQuanIdol.mp3',
            image: 'https://i.scdn.co/image/ab67616d0000b2736ef594a7c0c68fdc1c0c0a51'
        },
        {
            name: 'Waiting For You',
            singer: 'MONO',
            path: './assets/music/WaitingForYou-MONOOnionn.mp3',
            image: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/10/22/photo-3-1666438627327149130496.jpg'
        },
        {
            name: 'Anh Biết',
            singer: 'Xám',
            path: './assets/music/anhbiet-xam.mp3',
            image: './assets/img/anhbiet.jpg'
        },
        {
            name: 'Anh Muốn Nghe Giọng Em',
            singer: 'Nguyễn LYM',
            path: './assets/music/AnhMuonNgheGiongEm-NguyenLYMSeth-5362309.mp3',
            image: './assets/img/chill.jpg'
        },
        {
            name: 'Có Hạt Sương Trên Mắt Em',
            singer: 'Dick',
            path: './assets/music/CoHatSuongTrenMatEm-Dick-5730852.mp3',
            image: './assets/img/chill2.jpg'
        },
        {
            name: 'Được Không Anh Lofi Version',
            singer: 'Trang',
            path: './assets/music/DuocKhongAnhLofiVersion-TrangThienMagazineTempoG-6177053.mp3',
            image: 'https://images.genius.com/fe9107958e782c1db95f1420c72c65d0.1000x563x1.jpg'
        }
    ],
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    definedProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        } )
    },
    handleEvent: function() {
        const cdWidth = cd.offsetWidth

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY
            const newCdWidth = cdWidth - scrollTop
            
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function() {
            if(app.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        // Khi play music 
        audio.onplay = function() {
            app.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi pause music 
        audio.onpause = function() {
            app.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua song
        progress.onchange = function(e) {
            audio.currentTime = audio.duration / 100 * e.target.value
        }

        //Khi next song
        nextBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong()
            } else {
                app.nextSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }

        //Khi prev song
        prevBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong()
            } else {
                app.prevSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }
        
        // Auto next khi hết bài
        audio.onended = function() {
            if(app.isRandom) {
                app.playRandomSong()
            } else if(app.isRepeat) {
                audio.play()
            } else {
                app.nextSong()
            }
            app.render()
            audio.play()
            app.scrollToActiveSong()
        }

        //Khi click vào nút random
        random.onclick = function() {
            app.isRandom = !app.isRandom
            random.classList.toggle('active', app.isRandom)
        }

        //Khi click vào nút repeat
        repeat.onclick = function() {
            app.isRepeat = !app.isRepeat
            repeat.classList.toggle('active', app.isRepeat)
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode ||  e.target.closest('.option'))
            {
                 //Xử lý khi click vào song
                if(songNode) {
                    app.currentIndex = Number(songNode.dataset.index)
                    app.loadCurrentSong()
                    app.render()
                    audio.play()
                }
            }
        }

        //Open Sidebar
        menu.onclick = () => {
            sidebar.classList.add('open')
        }

        //Close Sidebar
        close.onclick = () => {
            sidebar.classList.remove('open')
        }

        //Tăng giảm ăm lượng
        volume.onchange = () => {
            audio.volume = volume.value/100
            if (audio.volume === 0) {
                mute.classList.remove('hide')
                volumeHigh.classList.add('hide')
            } else {
                volumeHigh.classList.remove('hide')
                mute.classList.add('hide')
            }
        }

        //Xử lý khi click vào volume icon

        //1. Khi click vào volume high
        volumeHigh.onclick = () => {
            audio.volume = 0
            volume.value = 0
            mute.classList.remove('hide')
            volumeHigh.classList.add('hide')
        }

        //2. Khi click vào mute
        mute.onclick = () => {
            audio.volume = 1
            volume.value = 100
            volumeHigh.classList.remove('hide')
            mute.classList.add('hide')
        }
    },
    getCurrentSong: function() {
        return this.songs[this.currentIndex]
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        document.title = `${this.currentSong.name} - ${this.currentSong.singer}`
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 200)
    },
    start: function() {
        //Định nghĩa thuộc tính cho obj 
        this.definedProperties()

        //Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvent()

        //Tải thông tin bài hát đâu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()
    },
    
}

app.start()