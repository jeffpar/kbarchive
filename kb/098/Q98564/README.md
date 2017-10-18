---
layout: page
title: "Q98564: Troubleshooting Sound Support for MS-DOS Games in WSS 1.0a"
permalink: kb/098/Q98564/
---

## Q98564: Troubleshooting Sound Support for MS-DOS Games in WSS 1.0a

	Article: Q98564
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Sound System version 1.0a software provides Sound Blaster emulation,
	which enables you to use a larger variety of MS-DOS-based games that use the
	Sound System hardware. To get Sound Blaster support, you must run your
	MS-DOS-based game in full-screen mode from the MS-DOS Prompt program in Windows
	running in 386 enhanced mode.
	
	However, some MS-DOS-based games may not work properly when run this way and you
	may experience problems using the Sound Blaster emulation. When this happens,
	try the following troubleshooting tips:
	
	1. Ensure that you have enough system resources to run the game in MS-DOS; check
	  the documentation included with the game for system requirements and test the
	  game in MS-DOS. The Sound System board provides AdLib support for synthesized
	  sounds in MS-DOS.
	
	2. Find out if there are any restrictions when running the game in full-screen
	  mode from the MS-DOS Prompt program with Windows; some games will not run
	  from MS-DOS Prompt with Windows running in 386 enhanced mode. In some cases,
	  you'll need to modify your CONFIG.SYS and AUTOEXEC.BAT files to free
	  conventional memory for your game to run properly in MS-DOS; again check the
	  game documentation.
	
	  Also make sure that you have the maximum amount of conventional memory
	  possible under MS-DOS Prompt while in Windows 386 enhanced mode by checking
	  the PIF settings in your DOSPRMPT.PIF file. Consult your Windows manual for
	  information on how to use the PIF Editor.
	
	3. If there are no problems with running the game with Windows, you can go ahead
	  and test for sound support. AdLib support will also be available from MS-DOS
	  Prompt with Windows. Test the game with AdLib support.
	
	4. Test the game with Sound Blaster support. Enable Sound Blaster support or
	  emulation by running the Games Configuration program from the Windows Sound
	  System group. You must be careful not to create an IRQ or I/O address
	  conflict when you enable digitized sounds because you must select IRQ 7 or 9
	  and an I/O address between 220h and 260h (here "h" means Hexadecimal). The
	  defaults are IRQ 7 and I/O 220h, and will work most of the time. Also you'll
	  need to have the DMA channel set to 1 before you can enable digitized sounds.
	
	5. Once Sound Blaster emulation has been set, test the game by running it in
	  full-screen mode from MS-DOS Prompt with Windows running in 386 enhanced mode
	  and not by running in a MS-DOS window. Most MS-DOS-based games will not work
	  in a MS-DOS window. Playing digitized sounds through an MS-DOS-based game
	  will in many cases require more conventional memory; therefore, if the game
	  seems to stop when it plays a digitized sound (where a digitized sound could
	  be a human voice) you may need to free more conventional memory with MS-DOS.
	
	NOTE: Some game developers are updating their games to support the Windows Sound
	System in native mode. You should contact the manufacturer of the game to see if
	the company is planning to release such a game.
	
	Additional query words: 1.0a arcade fun lockup lock up freeze hang crash tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100a
	
	=============================================================================
	
