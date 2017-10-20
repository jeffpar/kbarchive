---
layout: page
title: "Q177060: Error Message: Cannot Find File Imaadp32.acm, Win_08.cab"
permalink: /kb/177/Q177060/
---

## Q177060: Error Message: Cannot Find File Imaadp32.acm, Win_08.cab

{% raw %}

	Article: Q177060
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows 
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for one of the programs listed earlier in this
	article, you may receive the following error message:
	
	  Cannot find file Imaadp32.acm, Win_08.cab
	
	CAUSE
	=====
	
	You can receive this error message if you do not have the correct audio codec
	installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename and reinstall the appropriate audio codec. To do
	this, use the following steps.
	
	NOTE: You must have your Microsoft Windows 95 CD-ROM or floppy disks available to
	reinstall the codec.
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "imaadp32.acm" (without the quotation marks), and then
	  press ENTER.
	
	3. On the File menu, click Rename.
	
	4. Type "imaadp32.old" (without the quotation marks), and then press ENTER.
	
	5. Close the Find dialog box.
	
	6. Click Start, point to Settings, and then click Control Panel.
	
	7. Double-click Add New Hardware.
	
	8. Click Next, click No, and then click Next.
	
	9. Click Sound, Video, And Game Controllers, and then click Next.
	
	10. In the Manufacturers box, click Microsoft Audio Codecs.
	
	11. In the Models box, click IMA ADPCM CODEC, and then click Next.
	
	12. Click Finish. Insert the Windows 95 CD-ROM or floppy disk if you are
	  prompted.
	
	13. When you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	For additional information about audio codecs, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q141801 Troubleshooting Audio Codecs in Windows 95
	
	Additional query words: decompression msb aoe msgame homegame
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbKidsSearch kbAOESearch kbScholasticDinosaurs kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
