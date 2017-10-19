---
layout: page
title: "Q141483: Sound and Video Drivers Used by Multimedia Programs"
permalink: /kb/141/Q141483/
---

## Q141483: Sound and Video Drivers Used by Multimedia Programs

	Article: Q141483
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1991 edition,1992 edition,1993 edition,1994 edition,1995 edition,1996 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1991 edition, 1992 edition, 1993 edition, 1994 edition, 1995 edition 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows versions 1992 edition, 1994 edition, 1995 edition, 1996 edition 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Music Central for Windows 1997 edition 
	- Microsoft Multimedia Beethoven for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft SoundBits (all collections) 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article specifies the multimedia drivers used by the multimedia products
	listed at the top of this article. The information is organized in the following
	categories:
	
	- Driver Abbreviations Table
	
	- Table of sound and video formats used by the multimedia program
	
	- Driver source and files needed to play sound and video
	
	MORE INFORMATION
	================
	
	Driver Abbreviations Table
	--------------------------
	
	Abbreviation     Description of Driver
	------------     ---------------------
	
	INDEO            Intel Indeo(TM) Video Driver
	IR31             Intel Indeo(TM) Video R3.1
	IR32             Intel Indeo(TM) Video R3.2
	RT21             Intel Indeo(TM) Video [RT21]
	YVU9             Intel Indeo(TM) Video [YVU9]
	CINEPAK          SuperMatch Cinepak Video Codec
	SBED             SoundBits Events Driver
	MSVIDC           Microsoft Video 1 Compressor (MS-CRAM)
	MSACM            Microsoft Sound Mapper
	MSRLE            Microsoft RLE Video Compressor
	IMAADPCM         Microsoft IMA ADPCM Audio Codec
	GSM610           Microsoft GSM 6.10 Audio Codec
	MSADPCM          Microsoft ADPCM Audio Codec
	MMP              Multimedia Movie Player DLL
	MCIWAVE          [MCI] Sound
	MIDI             [MCI] MIDI Sequencer
	MCIAVI           [MCI] Microsoft Video for Windows
	MCIMMP           [MCI] Microsoft MCI Driver for MMP
	MCICDA           [MCI] CD Audio
	VOX              VoxWare speech compression (not listed in Control Panel)
	VFW              Video For Windows
	
	Sound and Video Formats Used by Multimedia Programs
	---------------------------------------------------
	
	Program              Driver        Where Used
	-------              -------       ----------
	
	Ancient Lands        ADPCM         Guided Tours
	                                  Sound Effects
	                                  Pronunciations
	                    IR32          Videos
	                    Also on disc: VFW 1.1
	                                  MSACM 2.0
	
	Art Gallery          ADPCM         Guided Tours
	                                  General Sound
	                                  Narratives
	                                  Pronunciations
	                    Also on disc: No Videos
	                                  MSACM 1.0
	                                  No separate .wav files
	
	Beethoven            CD Audio      General Sound
	                    MIDI          Play MIDI buttons
	                                  No videos or wave files
	
	Bookshelf            MCIWAVE       General Sound
	1991 and 1992        MIDI          National Anthems
	                                  Musical Examples
	
	Bookshelf 1993       ADPCM         Pronunciations
	                    ALSO ON DISC: MSACM 1.0
	                    MMP           Animations
	
	Bookshelf 1994       GSM610        Pronunciations
	                    CINEPAK       Videos
	                    MSVIDC
	                    MCIMMP        Animations
	                    Also on disc: VFW 1.1
	                                  MSACM 2.0
	
	Bookshelf '96-'97    VOX           Pronunciations
	                    Also on disc: VFW 1.1e
	                                  MSACM 2.1
	
	Cinemania 1992       MCIWAVE       General Sound
	
	Cinemania 1994       ADPCM         Movie Still Dialogs
	                    CINEPAK       Video Clips
	                    Also on disc: VFW 1.0
	                                  MSACM 2.0
	                                  No separate .wav files
	
	Cinemania 1995       MCIWAVE       Intro.wav
	                    MSVIDC       Suggestions Wheel (video)
	
	Cinemania 1997       IR32_32
	                    MSADP32
	                    MSVIDC32
	
	Complete BsktBall    ADPCM         All Sound Effects
	94-95                IR32          Videos
	                    Also on disc: MSACM 2.0
	                                  VFW 1.1d
	
	Complete BsktBall    MCIWAVE       Infrequently used
	95-96                Also on disc: VFW 1.1e
	
	Dangerous Creatures  ADPCM         All Sound Effects
	                                  General Sound
	                                  Pronunciations
	                    IR32          Videos
	                    MSVIDC        Overview video
	                    Also on disc: VFW 1.1d
	                                  MSACM 2.0
	
	Dinosaurs            ADPCM         Guides
	                                  Sound Effects
	                                  General Sounds
	                                  Pronunciations
	                    MCIWAVE       Narrations
	                                  Movie.wav
	                    MCIMMP        Animations
	                    CINEPAK       Videos
	                    Also on disc: Partial VFW 1.0
	                                  MSACM 1.0
	
	Encarta 1993         MIDI          Musical Examples
	                                  National Anthems
	                    MCIMMP        Animations
	
	Encarta 1994         ADPCM         All Pronunciations
	                                  Media Gallery Audio
	                    MCIWAVE       Quotations
	                    CINEPAK       Videos
	                    Also on disc: VFW 1.0
	
	Encarta 1995         GSM610        Pronunciations
	                                  Foreign Language
	                    ADPCM         Quotations
	                    IR32          Videos
	                    Also on disc: VFW 1.1d
	
	Encarta 1996         Also on disc: VFW 1.1e
	                                  MSACM 2.0
	
	Mozart               MCIWAVE       World
	                    ADPCM         General Sound
	                                  Game
	                    Also on disc: MSACM 1.0
	                                  No videos
	
	Multimedia Catalog   ADPCM         Some Demos
	                                  Intro.wave with older Catalog
	                                  (Beethoven's Ode to Joy)
	                    MCIWAVE       Some Demos
	                                  Intro.wav with newer Catalog
	                                  (Steel drum song)
	
	Music Central 1997   IR32_32
	                    MSADP32
	                    MSVIDC32
	
	Musical              ADPCM         General Sound
	Instruments          Also on disc: MSACM 1.0
	
	Schubert             ADPCM         General Sound
	                    MCIWAVE       A Word From Author (How
	                                  to use this product)
	                    MCIAVI        Videos are uncommpressed
	                                  "Flipping" play buttons
	                    Also on disc: MSACM 2.0
	                                  Partial VFW 1.1
	
	SoundBits            ADPCM         General Sound
	                    SBED          System Sounds
	                    Also on disk: MSACM 1.0
	
	Stravinsky           ADPCM         General Sound
	                                  Game
	                    Also on disc: MSACM 1.0
	                                  No videos
	
	Strauss              MCIWAVE       Game
	                    ADPCM         General Sound
	                                  Word From Author
	                    MCIAVI        Videos and play buttons
	                                  are uncompressed video
	                    Also on disc: Partial VFW 1.0
	                                  MSACM 2.0
	
	Wine Guide           ADPCM         General Sound
	                    GSM610        Pronunciations
	                    MSVIDC        Videos
	
	Wine Guide 2.0       Also on disc: VFW 1.1e
	                                  MSACM 2.01
	
	Driver Source and Files Needed to Play Sound and Video
	------------------------------------------------------
	
	Most programs playing digitized Wave (.wav) sounds, including Windows
	Media Player, require MCIWAVE. MSACM is required when playing
	compressed Wave, along with the appropriate codec
	(compressor/decompressor).
	
	NOTE: Some sound cards support ADPCM compression directly, and do not
	require MSACM.
	
	Video for Windows (VFW) is required when playing videos, and an
	appropriate codec if the videos are compressed. Generally, videos are
	always compressed. The sound in most video clips is uncompressed.
	
	MMP or MCIMMP (.mmm files) are used when playing animations(.mmm)
	files. MMP is required by Media Player. Other programs do not use MMP,
	but use MCIMMP instead.
	
	Microsoft Multimedia programs that require special files or drivers not
	normally included with Windows usually include these driver files on
	the program compact disc. For example, Video for Windows is not included
	with Windows 3.x. To allow program functionality, the necessary
	support files are included in the runtime version of Video for
	Windows supplied on the multimedia program's compact disc.
	
	If newer versions of these same drivers are installed on your
	computer, the Multimedia application's Setup program does not replace,
	or overwrite the file. If you install Bookshelf 1994, the Setup
	program installs MSACM 2.0. If you then install Encarta 1994 (includes
	MSACM 1.0), Encarta's Setup program does not install the older MSACM
	1.0 files.
	
	NOTE: Windows 95 is the first version of Windows to include Video for
	Windows and MSACM. Windows 95 includes 32-bit Codecs for all the
	formats listed above, and is compatible with 16-bit Codecs as well.
	For this reason, Windows 95 programs do not include these drivers on
	their own compact disc.
	
	CAUTION: Do not attempt to install or copy older Video for Windows or
	MSACM system files onto a Windows 95/98 based-computer.
	
	Driver Source and Files Needed to Play Sound and Video
	------------------------------------------------------
	
	Windows 3.1:
	------------
	
	MCIWAVE       [MCI] Sound driver
	MCICDA        [MCI] CD Audio driver
	MIDI          [MCI] MIDI Sequencer
	
	Windows 95:
	-----------
	
	MCIWAVE       [MCI] Sound driver
	MCICDA        [MCI] CD Audio driver
	MIDI          [MCI] MIDI Sequencer
	MSACM 4.0     Microsoft Audio Compression Manager (Sound Mapper)
	VFW 4.0       Video For Windows
	
	Included with multimedia programs only:
	
	MCIMMP        [MCI] Microsoft MCI Driver for MMP
	MMP           Multimedia Movie Player DLL
	MSACM 1.0     Microsoft Audio Compression Manager (Sound Mapper)
	MSACM 2.0
	SBED          SoundBits Events Driver
	VFW 1.0
	VFW 1.1
	VFW 1.1d
	VFW 1.1e
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm drive music dinos Usage Dev/Drv sound video Viewer 1.0 MediaView TBook
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbMMBeethoven100a kbBookShelf1991 kbBookShelf1992 kbBookShelf1993 kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1994 kbCinemania1992 kbCinemania1995 kbCinemania1996 kbDinosaurs100 kbMusicCentral kbMusicalInst kbSoundBits kbWine100 kbWine100a kbWine200 kbArtGallery kbEncartaEnCyc1996 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbMusicCentral1997
	Version           : :1.0,1.0a,1991 edition,1992 edition,1993 edition,1994 edition,1995 edition,1996 edition,1997 edition,2.0
	
	=============================================================================
	
