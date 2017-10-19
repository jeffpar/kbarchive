---
layout: page
title: "Q76816: SYSTEM.INI Settings for Multimedia Windows"
permalink: /kb/076/Q76816/
---

## Q76816: SYSTEM.INI Settings for Multimedia Windows

	Article: Q76816
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	1.00
	
	WINDOWS
	
	kbref kbdisplay kbsound kbmm
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes settings in the SYSTEM.INI file that are specific with
	Windows with Multimedia Extensions. This information is part of the contents of
	the SYSINI.TXT, SYSINI2.TXT, SYSINI3.TXT, and SYSINI4.TXT files shipped with the
	product.
	
	This information does not apply to later versions of Windows.
	
	The following sections are added to the SYSTEM.INI file:
	
	Section             Description
	-------             -----------
	
	[drivers]           Lists drivers for Windows with Multimedia
	                   Extensions
	
	[mci]               Lists Media Control Interface (MCI) drivers for
	
	                   Windows with Multimedia Extensions
	
	[mmsystem]          Lists options that control the stack
	
	                   used by MMSYSTEM.DLL at interrupt time
	
	[Multimedia.Setup]  Lists audio and display drivers selected
	                   during setup of Windows with Multimedia
	                   Extensions for use by the Setup program
	                   and the Display application in the Control
	                   Panel (the listings for this section are
	                   in the SYSINI4.TXT file)
	
	The specific options are described separately, by section, below.
	
	[BOOT] SECTION
	--------------
	
	Drivers=<filename>:
	
	Default: MMSYSTEM.DLL
	
	Purpose: In Windows with Multimedia Extensions, this setting specifies drivers
	that are installed at boot time.
	
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	SCRNSAVE.EXE=<filename>:
	
	Default: none
	
	Purpose: This setting specifies the ScreenSaver routine to display on the screen
	during periods of inactivity.
	
	To change: Run ScreenSaver from Control Panel. This setting changes when you
	select a different screen saver.
	
	[BOOT.DESCRIPTION] SECTION
	--------------------------
	
	display.drv=<string>:
	
	Default: n/a
	
	Purpose: Specifies the video driver description entered into the other .INI
	file.
	
	To change: Run Display from the Control Panel. This setting changes when you
	select a different video driver.
	
	[DRIVERS] SECTION
	-----------------
	
	The [drivers] section lists installable device drivers for Windows with
	Multimedia Extensions. These drivers do not include Media Control Interface
	(MCI) device drivers, which are listed in the [mci] section of the file.
	
	Entries in this section have the following format:
	
	  device_type=driver_name [parameters]
	
	The device_type is the type of device, and the driver_name is the filename for
	the device driver installed for that device type. Parameters that are specific
	to a device driver may follow the driver_name. Alternatively, these parameters
	may be given in a section with the same name as the device driver:
	
	  [driver_name]
	  keyname=value
	  .
	  .
	.
	
	The following sections describe the settings that Windows with Multimedia
	Extensions adds to the [drivers] section. Follow these steps to change any of
	the settings:
	
	1. From the Control Panel, select the Drivers icon.
	
	2. Choose Add to add a new device driver, or select a device type from the
	  Installed Drivers list to modify or remove the current driver.
	
	3. Choose Setup to select options for the driver.
	
	4. Choose OK.
	
	joystick=<filename>:
	
	Windows with Multimedia provides: IBMJOY.DRV
	
	Purpose: This setting specifies the joystick device driver.
	
	midi=<filename>:
	
	Purpose: This setting specifies the MIDI device driver.
	
	timer=<filename>:
	
	Windows with Multimedia provides: TIMER.DRV
	
	Purpose: This setting specifies the timer device driver.
	
	wave=<filename>:
	
	Purpose: This setting specifies waveform-audio device driver.
	
	[MCI] SECTION
	-------------
	
	The [mci] section lists MCI device drivers for Windows with Multimedia
	Extensions. If more than one device of a given type is installed, the keyname
	has a number as its last character.
	
	Windows with Multimedia adds the following settings to the [mci] section.
	
	CDAudio=<filename>:
	
	Windows with Multimedia settings: MCICDA.DRV
	
	Purpose: This setting specifies the filename of the MCI driver used to control
	audio compact-disc (CD) players.
	
	To change: Select the Drivers icon from the Control Panel. Choose Add to add a
	new videodisc driver, or select CDAudio from the Installed Drivers list to
	modify the current driver. Click Setup to select options for the device driver
	(for example, the device number for the CD player). Then choose OK.
	
	Sequencer=<filename>:
	
	Windows with Multimedia settings: MCISEQ.DRV
	
	Purpose: This setting specifies the filename of the MCI driver used to control
	playback of MIDI sequences.
	
	To change: Select the Drivers icon from the Control Panel. Choose Add to add a
	new driver, or select Sequencer from the Installed Drivers list to modify the
	current driver. Click Setup to select options (if any) for the device driver.
	Then choose OK.
	
	Videodisc=<filename> [<com-port>]:
	
	Windows with Multimedia settings: MCIPIONR.DRV COM1
	
	Purpose: This setting specifies the filename of the MCI driver used to control
	external videodisc players.
	
	To change: Select the Drivers icon from the Control Panel. Choose Add to add a
	new videodisc driver, or select Videodisc from the Installed Drivers list to
	modify the current driver. Click Setup to select a COM port for the videodisc
	player. Then choose OK.
	
	WaveAudio=<filename> [<buffer-size>]:
	
	Windows with Multimedia settings: MCISEQ.DRV 4
	
	Purpose: This setting specifies the filename of the MCI driver used to control
	recording and playback of waveform audio files. It may optionally specify the
	number of seconds (an integer in the range 2 to 9 seconds) of audio the driver
	should buffer during playback or recording.
	
	To change: Select the Drivers icon from the Control Panel. Choose Add to add a
	new driver, or select WaveAudio from the Installed Drivers list to modify the
	current driver. Click Setup to select options (for example, buffer size). Then
	choose OK.
	
	[MMSYSTEM] SECTION
	------------------
	
	The [mmsystem] section includes options used by MMSYSTEM.DLL.
	
	Windows with Multimedia puts the following settings in the [mmsystem] section.
	
	StackFrames=<number>:
	
	Defaults: 3
	
	Purpose: This setting specifies the number of stack frames used when new
	instances of MMSYSTEM.DLL are called.
	
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	StackSize=<number>:
	
	Defaults: 1536
	
	Purpose: This setting specifies the number of bytes in each stack frame used when
	new instances of MMSYSTEM.DLL are called.
	
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	[MULTIMEDIA.SETUP] SECTION:
	
	The [Multimedia.Setup] section records information about the currently installed
	audio and video hardware from your input during setup. Anytime you run Setup
	after the initial setup, and anytime you select the Display application from the
	Control Panel, these programs use the information given in this section.
	
	Windows with Multimedia adds the following settings to the [Multimedia.Setup]
	section:
	
	audio=<filename>,<port>,<interrupt>,<dsp-version>:
	
	Windows with Multimedia uses: SNDBLST.DRV,210,3,none
	
	Purpose: This setting specifies the device driver for the audio device you
	specified when setting up Windows with Multimedia. For the Sound Blaster audio
	board, the extra parameters specify the port number, interrupt, and Digital
	Signal Processor (DSP) version. The DSP version is either 105 (version 1.05),
	150 (version 1.5), or 200 (version 2.0).
	
	To change: Rerun Setup.
	
	display=<filename>:
	
	Windows with Multimedia uses: MMV7VGA.DRV
	
	Purpose: Specifies the device driver for the video card you specified when
	setting up Windows with Multimedia.
	
	To change: Rerun Setup.
	
	SECTIONS FOR WINDOWS WITH MULTIMEDIA DEVICE DRIVERS
	---------------------------------------------------
	
	As noted earlier in this file, for any device driver described in the [drivers]
	section of SYSTEM.INI, parameters may be defined in a section with that device
	driver name. The following device-specific sections define parameters for the
	default device drivers provided in Windows with Multimedia Extensions:
	
	  [ibmjoy.drv]
	  [sndblst.drv]
	
	The following sections describe the entries that may appear in these sections.
	(Additional sections may appear for other audio, video, or peripheral devices
	installed on the system.)
	
	[ibmjoy.drv]
	axes=<2-or-3>
	timeout=<hex-number>
	
	  Defaults: axes=2
	           timeout=0x3000
	
	  Purpose: The axes option specifies whether the joystick is
	  two-dimensional (2) or three-dimensional (3). The timeout option is
	  a hexadecimal value specifying how many times the joystick driver
	  is polled before the system determines that a joystick is not
	  installed on the system.
	
	  To change: Use Notepad to edit the SYSTEM.INI file.
	
	[sndblst.drv]
	port=<hex-humber>
	interrupt=<number>
	DisableWarning=<Boolean>
	
	  Defaults: none
	
	  Purpose: The port option specifies the port number for the Sound Blaster audio
	  card. This is the port where the jumper on the card is set. The interrupt
	  option specifies which interrupt the Sound Blaster uses. The DisableWarning
	  option, if enabled, displays a warning message if a DOS application running
	  from the Windows DOS prompt tries to access the Sound Blaster port given in
	  the port option or the interrupt given in the interrupt option. This option
	  is enabled by default.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
