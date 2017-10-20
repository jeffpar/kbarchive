---
layout: page
title: "Q88141: Setup Toolkit .INF File Format and Disk Labels"
permalink: /kb/088/Q88141/
---

## Q88141: Setup Toolkit .INF File Format and Disk Labels

{% raw %}

	Article: Q88141
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1; WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Setup Toolkit for Windows, the Source Media Descriptions
	section of the .INF file contains one line for each of the disks you use to
	install your application. Each of these lines consists of four quoted strings,
	separated by commas. The second quoted string is the disk label, which you
	create using the disk-layout utilities. This disk label has nothing to do with
	the MS-DOS disk label. The disk label in the .INF file comes from the Disk
	Labels command on the Options menu in DSKLAYT.EXE and is arbitrarily chosen by
	the developer during the disk-layout process.
	
	The Setup Toolkit only uses this disk label to prompt the user for disks. The
	Setup Toolkit uses the tag filename in the Source Media Descriptions section to
	determine if the proper disk has been placed in the drive.
	
	Additional query words: 3.00 3.10 3.50 MSSetup tool kit win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1; WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
