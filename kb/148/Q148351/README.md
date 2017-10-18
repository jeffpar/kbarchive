---
layout: page
title: "Q148351: Multimedia: Some CD-ROM Drives Can't Properly Read Disc"
permalink: kb/148/Q148351/
---

## Q148351: Multimedia: Some CD-ROM Drives Can't Properly Read Disc

	Article: Q148351
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- Microsoft Windows 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a CD-ROM product, or attempt to read data from your
	CD-ROM drive, you may experience error messages similar to the following:
	
	  CDR101: Not Ready
	
	-or-
	
	  CDR 103 Error: Not of High Sierra Format or ISO 9960 Format
	
	You may also experience system problems, such as your system not detecting when
	you have inserted a different CD-ROM disc from CD-ROM software packaged with
	more than one CD-ROM disc.
	
	
	CAUSE
	=====
	
	Some CD-ROM drives do not comply with the Red Book specification for radial
	noise. Documented instances indicate the problem occurs with triple-and
	quad-speed NEC CD-ROM drives. CD-ROM drives manufactured by vendors independent
	of NEC may experience similar characteristics.
	
	The problem usually occurs with discs more than 70 minutes long.
	
	RESOLUTION
	==========
	
	To work around this problem, you must use a different CD-ROM drive, or the
	CD-ROM manufacturer must reduce the length of the CD-ROM disc.
	
	Some Microsoft CD-ROM titles have been returned and re-stamped at the
	manufacturing plant to be less than 70 minutes long.
	
	MORE INFORMATION
	================
	
	The following section provides information about the following CD-ROM
	standards:
	
	- Red Book for CD audio
	
	- Yellow Book for CD-ROM and CD-ROM XA
	
	- Green Book for CD-interactive (CD-i)
	
	- Orange Book for recordable CDs
	
	- White Book for Video CD
	
	- Blue Book for Enhanced Music CD (CD Plus)
	
	- XA
	
	Red Book
	--------
	
	Red Book describes the physical properties of the compact disc and the encoding
	of the digital audio data. It comprises the following information:
	
	- Audio specification for 16-bit PCM
	
	- Disc specification, including physical parameters
	
	- Optical stylus and parameters including laser wavelength, numerical aperture,
	  pit sizes and track pitch
	
	- Deviations and block error rate
	
	- Modulation system and error correction
	
	- Control and display system (for example, subcode channels)
	
	A more recent addition to Red Book describes the CD graphics option using the
	subcode channels R to W. This describes the various applications of these
	subcode channels including graphics and MIDI, both of which can be used for
	Karaoke applications.
	
	CD Audio (sometimes called Redbook) is identical to that on standard audio
	compact discs. CD audio is digital stereophonic audio that was digitized at a
	sampling rate of 44,100 kHz using a 16-bit sample size, providing excellent
	fidelity for reproduction of all types of sounds, including music. When you are
	playing CD audio, the digital-to-analog conversion is performed by circuits in
	the CD-ROM player. In non- multimedia systems, the analog audio signal is sent
	directly from the CD-ROM player to the speakers; in multimedia system, the
	output is routed through the sound board (without any further processing) to the
	speakers.
	
	The Red Book standard defines tolerance limits for radial noise. The disk format
	for storing digital audio is an international standard that specifies where and
	how the data is placed on the disk.
	
	One of the restrictions of this format is CD-ROM data (images, programs, etc.)
	and audio must be kept on separate tracks on the disk, as opposed to being
	interleaved. This makes it difficult to synchronize sound and graphics.
	
	Yellow Book
	-----------
	
	Yellow Book was written in 1984 to describe the extension of CD to store computer
	data (CD-ROM). This specification comprises of the following content:
	
	- Disc specification which is a copy of part of the Red Book
	
	- Optical stylus parameters (from Red Book)
	
	- Modulation and error correction (from Red Book)
	
	- Control & display system (from Red Book)
	
	- Digital data structure, which describes the sector structure and the ECC and
	  EDC for a CD-ROM disc.
	
	As a separate extension to Yellow Book, the CD-ROM XA specification comprises the
	following:
	
	- Disc format including Q channel and sector structure using Mode 2 sectors.
	
	- Data retrieval structure based on ISO 9660 including file interleaving which
	  is not available for Mode 1 data.
	
	- Audio encoding using ADPCM levels B and C
	
	- Video image encoding (for example, stills)
	
	Green Book
	----------
	
	Green Book, written originally in 1987, describes the CD- interactive (CD-i)
	disc, player and operating system and contains the following information:
	
	- CD-i disc format (track layout, sector structure)
	
	- Data retrieval structure which is based on ISO 9660 with some additions.
	
	- Audio data using ADPCM levels A, B and C (cf CD-ROM XA)
	
	- Real-time video data which describes the disc coding of different types of
	  still images, the video decoder and visual effects available.
	
	- Program related data, which defines the 68000 processor instruction set, the
	  character sets to be used and phonetic coding.
	
	- Compact Disc Real Time Operating System, which is the operating system used
	  in every CD-i player. Green Book specifies the OS kernel, file managers,
	  drivers and all the system calls available.
	
	- Base case system which is a specification of the minimum CD-i hardware
	  configuration.
	
	- Full motion extension which defines the functions provided by the MPEG
	  cartridge and the software calls available for MPEG decoding.
	
	Green Book is the most comprehensive specification of all the colored books,
	specifying in detail not just the disc but the coding of data and the
	architecture of the player hardware and software.
	
	CD-i (interactive), or Green Book, is a special variation of the CD-ROM format
	that is specifically designed for audiovisual applications. It allows for
	interleaved CD-ROM data and audio, thus allowing a completely synchronized
	audiovisual sequence. CD-i describes a complete system, not just a peripheral,
	and is there fore not compatible with existing computers.
	
	Orange Book
	-----------
	
	Orange Book defines CD-Recordable discs with multi-session capability. It is in
	three parts:
	
	- Part I defines CD-MO (Magneto Optical) re-writable discs, last updated in
	  November 1990.
	
	- Part II defines CD-WO (Write Once) discs, last updated in January 1994.
	
	- Part III defines the CD-E (Erasable) disc format. The tentative version 0.8
	  was released in September 1995.
	
	All three parts contain the following sections:
	
	- Disc specification for the unrecorded disc and the recorded disc.
	
	- Pre-groove modulation which is necessary for motor control information needed
	  during writing.
	
	- Data organization including linking to allow writing at different times.
	
	- Multi-session and hybrid discs
	
	- Recommendations for measurement of reflectivity, optimum power control,
	  environment, light fastness, push pull magnitude, measurement of groove
	  wobble amplitude, wavelength dependency, jitter, use of pre-gap, serial copy
	  management and others.
	
	White Book
	----------
	
	White Book defines the Video CD specification. First published in 1993, there
	have been several versions:
	
	- Ver 1.0: Karaoke CD specification, MPEG-1 data in tracks
	
	- Ver 1.1: Video CD: as 1.0 but chapter marks and multi-volume album facilities
	  added
	
	- Ver 2.0: Video CD: addition of stills, generic menus, playlists, closed
	  caption text.
	
	White Book (ver 2.0) comprises of:
	
	- Disc format including use of tracks, Video CD information area, segment play
	  item area, audio/video tracks and CD-DA tracks.
	
	- Data Retrieval Structure, compatible with ISO 9660.
	
	- MPEG audio/video track encoding including image sizes allowed, video/audio
	  bit rate, sector interleaving and examples of MPEG packets.
	
	- Segment play item encoding for video sequences, video stills and CD-DA
	  tracks.
	
	- Play sequence descriptor to allow the playback of preprogrammed sequences.
	
	- User data fields for scan data (enabling fast forward/reverse) and closed
	  captions.
	
	- Examples of play sequences and playback control.
	
	Blue Book
	---------
	
	Blue Book defines the Enhanced Music CD (also known as CD Plus) specification for
	multi-session pressed disc (not recordable) comprising audio and data sessions.
	Enhanced Music CD discs are intended to be played on any CD audio player, on PCs
	and on future custom designed players. The current version 0.9 was released in
	July 1995.
	
	Blue Book allows you to view music videos, photos, lyrics and liner notes when
	they are played on PCs that run Windows 95 (yet will still play music on a
	standard audio CD player). But if you want to run software and music titles that
	employ the Bluebook enhanced CD technology provided by Windows 95, the CD-ROM
	must be a multi-session compatible drive.
	
	Blue Book comprises of:
	
	- Disc specification and data format including the two sessions (audio and
	  data). The second, data session must be a CD-ROM XA session.
	
	- Directory structure (to ISO 9660) including the directories for CD Plus
	  information, pictures and data. It also defines the format of the CD Plus
	  information files, picture file formats and other codes and file formats.
	
	- MPEG still picture data format.
	
	XA
	--
	
	CD-ROM XA (extended architecture), proposed by Sony, Philips and Microsoft in
	1988, represents a bridge between CD-i and CD-ROM. It defines a format for
	storing compressed audio along with other data on a CD-ROM disk, and the way in
	which the stored information is read from the disk. Unlike CD-i, CD-ROM XA is
	not dependent on specific operating systems or CPU's. Up to 16 hours of
	interleaved audio can be stored on XA specification CD-ROM disks.
	
	Interrupt 24/Mscdex.exe Messages
	--------------------------------
	
	The "CDR10<X>" error messages correspond to the following critical error
	handler messages (interrupt 24 calls) generated by MSCDEX:
	
	  
	
	  CDR100: Unknown Error
	  CDR101: Not Ready
	  CDR102: EMS Memory No Longer Valid
	  CDR103: CDROM Not High Sierra or ISO-9660 Format
	  CDR104: Door Open
	
	The following are critical errors:
	
	1. 
	
	  "CDR101 Read Failed"
	
	  This means an error was reported by the device driver. The most likely cause
	  is an open drive door, or the disc not being up to speed. Check the following
	  items when you receive this error:
	
	  a. Make sure that an audio disc is not in the drive.
	
	  b. Check the internal flat ribbon cable to make sure it is properly
	     connected.
	
	  c. Move the CD-ROM device driver and MSCDEX.EXE statement to the end of the
	     CONFIG.SYS and AUTOEXEC.BAT files.
	
	  d. Clean boot the system.
	
	2. 
	
	  "CDR102 EMS memory no longer valid"
	
	  The EMS memory possibly is corrupt. You need to reboot the system.
	
	3. 
	
	  "CDR103 Disc in drive is not High Sierra"
	
	  The disc needs to be in High Sierra format. Other CD-ROMs are not recognizable
	  by MSCDEX.
	
	The following are initialization errors:
	
	1. 
	
	  "Incorrect DOS version"
	
	  MSCDEX does not work with DOS Versions 1.x or 2.x.
	
	2. 
	
	  "MSCDEX already started"
	
	  MSCDEX already is installed. You can have only one instance of MSCDEX running
	  at a time.
	
	3. 
	
	  "Device driver not found: 'DEVNAME'"
	
	  The device driver name given on the MSCDEX command line /D:DEVNAME was not
	  found. Make sure the name is correctly spelled and the driver is correctly
	  installed.
	
	4. 
	
	  "No valid CDROM device drivers selected"
	
	  MSCDEX will not install if no /D:<drive name> device driver arguments
	  are given or if the ones given are not found.
	
	5. 
	
	  "Not enough drive letters available"
	
	  You need to expand the number of drive letters available using the Lastdrive
	  command in Config.sys.
	
	6. 
	
	  "Memory size of X too small, increased to Y"
	
	  This is only a warning. MSCDEX has some minimum memory requirements to
	  operate.
	
	7. 
	
	  "Not enough expanded memory, reducing number of buffers"
	
	  This is only a warning. You cannot ask for more buffers than you have
	  available memory.
	
	8. 
	
	  "Expanded memory allocation error"
	
	  An error was reported by the Expanded Memory Manager. The Expanded Memory
	  Manager may be corrupt; it may be necessary to reboot to install MSCDEX.
	
	9. 
	
	  "Expanded memory not present or usable"
	
	  This is a warning. You cannot use Expanded Memory if it is not there. MSCDEX
	  will continue using normal memory.
	
	10. 
	
	  "Illegal option 'X'"
	
	  An illegal command line option was specified.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm cdr-101 cdr101 cdr-103 cdr103 3.11 1995 wfw compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbAudDeveloper kbOSWinSearch kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin311
	Version           : :3.11
	
	=============================================================================
	
