---
layout: page
title: "Q99860: Debug Script to Test for Sound Blaster Emulation"
permalink: /kb/099/Q99860/
---

## Q99860: Debug Script to Test for Sound Blaster Emulation

{% raw %}

	Article: Q99860
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain conditions it may be necessary to ensure that the sound card that
	ships with Windows Sound System is able to emulate the Creative Labs Sound
	Blaster audio card. The following debug script may be used to test whether the
	Windows Sound System hardware is properly set for Sound Blaster emulation mode.
	
	MORE INFORMATION
	================
	
	The following script must be run from the MS-DOS Prompt program running in a
	window in Windows or after configuring for sound blaster support at the DOS
	level. In this script, BaseIO+6 represents the BaseIO address value selected in
	the Windows Sound System Games Configuration dialog box plus six. For example,
	if the BaseIO address in the Games Configurations dialog box is 220h, then
	BaseIO+6 would be 226. All values returned using Debug's "i" command will be in
	base 16 (hexadecimal format).
	
	1. At the MS-DOS command prompt, type "debug" (without the quotation marks).
	  This command starts Debug, a program that allows you to test and debug
	  executable files. When Debug is started, the prompt becomes a hyphen (-).
	
	2. Type "o BaseIO+6 1" (without the quotation marks). This command sends the
	  value of the byte to the specified output port.
	
	3. Type "o BaseIO+6 0" (without the quotation marks). This command sends the
	  value of the byte to the specified output port.
	
	4. Type "i 22e" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned value should
	  indicate that the seventh bit of the byte is a 1. For example, if the
	  returned value is C0, converting this value to binary format results in
	  11000000. As a result, the seventh bit is a 1 (bits are counted from right to
	  left). If you are not familiar with the conversion of hexadecimal to binary
	  format, see the section immediately following this debug script for a
	  conversion procedure.
	
	5. Type "i 22a" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned valued must be AA.
	  If it does not return AA, do not proceed, an error has occurred (see the
	  possible causes listed below).
	
	6. Type "o 22c e1" (without the quotation marks). This command sends the value
	  of a byte to the specified output port.
	
	7. Type "i 22e" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned value should
	  indicate that the seventh bit of the byte is a 1.
	
	8. Type "i 22a" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned value should be 01
	  (indicating major version 01).
	
	9. Type "i 22e" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned value should
	  indicate that the seventh bit of the byte is a 1.
	
	10. Type "i 22a" (without the quotation marks). This command reads and displays
	  the byte value at the specified port address. The returned valued should be
	  05 (indicating minor version 05, combining the result from line 7 and line 8
	  gives a version 01.05).
	
	11. Type "q" (without the quotation marks). This command exits Debug and returns
	  you to an MS-DOS command prompt.
	
	If the returned values are other than those stated above, the Windows Sound
	System hardware is not properly emulating the Sound Blaster audio card. This
	could be the result of one of the following:
	
	1. The debug script was not run from an MS-DOS command prompt running in a
	  window under in 386 enhanced mode or at the MS-DOS level after configuring
	  the system for the Sound Blaster compatability. Sound Blaster virtualization
	  is not available in standard mode.
	
	2. Voice Pilot is open (but it doesn't have to be active). Voice Pilot
	  monopolizes the Windows Sound System hardware.
	
	3. The system is not configured for Sound Blaster compatibility.
	
	4. VSNDSYS.386 put up a blue screen during Setup, indicating that the IRQ or DMA
	  settings are not correct and Sound Blaster virtualization is not possible (if
	  this occurred, Sound Blaster virtualization is automatically disabled).
	
	5. The Windows Sound System hardware is in use by some other Windows-based
	  application.
	
	6. There may be some hardware or software conflict, or the possibility of a
	  problem with the board itself.
	
	NOTE: If sounds are initiated on your system by the opening of an MS-DOS virtual
	machine, this may cause the game to fail to detect the Sound Blaster
	compatibility of the Windows Sound System. For example, if a .PIF file
	referencing an MS-DOS-based application is started, and the action of opening a
	new MS-DOS Prompt window initiates the play back of a .WAV file, and the game
	initializes while the .WAV is playing, the game will operate as though it was
	unable to detect Sound Blaster hardware because the Windows Sound System
	hardware was in use by Windows.
	
	Converting Hexadecimal Numbers to Binary Format
	-----------------------------------------------
	
	1. Open or switch to Calculator (usually found in the Accessories group).
	
	2. Choose Scientific from the View menu.
	
	3. Select the Hex radio button to place Calculator in Hexadecimal mode.
	
	4. Enter the hexadecimal number into Calculator using either your keyboard or
	  mouse.
	
	5. Select the Bin radio button to place the calculator in Binary mode.
	
	6. Calculator now displays the binary equivalent of the entered hexadecimal
	  number.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	

{% endraw %}
