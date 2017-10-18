---
layout: page
title: "Q150651: Microsoft DirectX 1.0 Questions and Answers"
permalink: kb/150/Q150651/
---

## Q150651: Microsoft DirectX 1.0 Questions and Answers

	Article: Q150651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 05-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains questions and answers about Microsoft DirectX version 1.0.
	
	MORE INFORMATION
	================
	
	1. Q. What is Microsoft DirectX?
	
	  A. Microsoft DirectX is a set of drivers that is available with the Microsoft
	  Game Software Development Kit (SDK).
	
	2. Q. What components make up Microsoft DirectX?
	
	  A. DirectX components include DirectDraw, DirectInput, DirectPlay, and
	  DirectSound. DirectDraw and DirectSound components replace current Windows 95
	  display and sound drivers with DirectX drivers.
	
	3. Q. How do I obtain Microsoft DirectX?
	
	  A. If you develop computer games and you want to provide DirectX functionality
	  within your game, you need the Microsoft Game SDK. The Game SDK is available
	  on the Microsoft Developer's Network (MSDN) Level 2 CD-ROM.
	
	  Independent software vendors (ISVs) who use these components in their games
	  can redistribute them.
	
	4. Q. What is DirectDraw?
	
	  A. DirectDraw allows direct access of video display memory, hardware blitters,
	  hardware overlays, and page flipping. DirectDraw provides this functionality
	  while maintaining compatibility with existing Windows 95-based programs and
	  device drivers.
	
	  Essentially, DirectDraw is a memory manager for video memory. Using
	  DirectDraw, a program can manipulate video memory with ease, taking full
	  advantage of the blitting and color decompression capabilities of different
	  types of video hardware without becoming dependent on a particular piece of
	  hardware.
	
	5. Q. What is DirectInput?
	
	  A. The Microsoft DirectInput application programming interface (API) provides
	  fast and consistent access to analog and digital joysticks. The DirectInput
	  API maintains consistency with the joystick APIs of the Microsoft Win32
	  Software Development Kit (SDK), but has improved responsiveness and
	  reliability by changing the device driver model. DirectInput device drivers
	  also use the registry to store settings for standard joysticks, calibration
	  information for previously configured joysticks, and settings for
	  OEM-supplied joysticks.
	
	6. Q. What is DirectPlay?
	
	  A. The Microsoft DirectPlay application programming interface (API) for
	  Windows 95 is a software interface that simplifies game access to
	  communication services. DirectPlay provides a way for games to communicate
	  with each other that is independent of the underlying transport, protocol, or
	  online service.
	
	7. Q. What is DirectSound?
	
	  A. The Microsoft DirectSound application programming interface (API) is the
	  audio component of the Microsoft Windows 95 Game SDK that provides
	  low-latency mixing, hardware acceleration, and direct access to the sound
	  device. DirectSound provides this functionality while maintaining
	  compatibility with existing Windows 95-based programs and device drivers.
	
	8. Q. What do I do if I have problems with the DirectX drivers that replace my
	  Windows 95 video and sound drivers?
	
	  A. If you experience problems with the DirectX video or sound drivers, you can
	  remove them by running Dxsetup.exe. Dxsetup.exe is supplied by the product
	  that installed DirectX. For example, some games include DirectX support.
	
	9. Q. Who supports Microsoft Game SDK and DirectX?
	
	  A. Microsoft Game SDK is supported by Microsoft Developer Support. The DirectX
	  drivers, such as video and sound drivers, are supported by the Desktop
	  Systems group. If your DirectX drivers are provided by an original equipment
	  manufacturer (OEM), the drivers are supported by that manufacturer.
	
	
	Additional query words: win95faq
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
