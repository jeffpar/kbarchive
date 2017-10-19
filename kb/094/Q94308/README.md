---
layout: page
title: "Q94308: WFWG Err Msg: &quot;You Can Only Share...&quot; Sharing a CD-ROM"
permalink: /kb/094/Q94308/
---

## Q94308: WFWG Err Msg: &quot;You Can Only Share...&quot; Sharing a CD-ROM

	Article: Q94308
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you attempt to share an otherwise
	properly configured local CD-ROM drive while using Windows for Workgroups
	(WFWG):
	
	  You can only share resources that are on your computer. If you are trying to
	  share a printer, make sure that it is a local printer and that the TEMP
	  directory is on a local drive.
	
	CAUSE
	=====
	
	This error may occur if the drive designator (letter) assigned to the CD-ROM
	device was previously assigned to a remote resource on the network.
	
	Windows for Workgroups running in enhanced mode provides the ability to share
	local disks (including CD-ROMs) and printer resources with other users on the
	network. If the local drive letter assigned to the CD-ROM has also been assigned
	to a remote disk resource, by using the File Manager or a NET USE command, File
	Manager still displays the CD-ROM and its contents for that drive letter.
	However, attempts to share the CD-ROM results in the above error message.
	
	WORKAROUND
	==========
	
	There are three workarounds to eliminate this problem, depending on the
	configuration involved and the intended result. Use one of the following
	methods:
	
	- From the MS-DOS Prompt INSIDE of Windows for Workgroups, type:
	
	  net use <x>: /d
	
	  where <x> is the drive letter in conflict between the remote resource
	  and the CD-ROM.
	
	  -or-
	
	- From the Windows for Workgroups directory MS-DOS command prompt OUTSIDE of
	  Windows, delete the CONNECT.DAT file.
	
	  NOTE: This removes ALL persistent network connections. You will need to
	  manually re-establish all non-conflicting connections during your next
	  Windows for Workgroups session.
	
	  -or-
	
	- Use the MSCDEX /L:<letter> option to change the drive letter assigned
	  to the CD-ROM to that of an available, unassigned drive letter. MSCDEX is
	  typically loaded with AUTOEXEC.BAT. Note that the /S parameter is also
	  required to share the CD-ROM. Type "mscdex" (without the quotation marks) at
	  the MS-DOS command prompt outside of Windows for Workgroups for a list of
	  available MSCDEX options.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
