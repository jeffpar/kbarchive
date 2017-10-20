---
layout: page
title: "Q89494: VHotKeyd.exe VxD Hot Keys in Windows 386 Enhanced Mode"
permalink: /kb/089/Q89494/
---

## Q89494: VHotKeyd.exe VxD Hot Keys in Windows 386 Enhanced Mode

{% raw %}

	Article: Q89494
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDK
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VHotKeyd.exe is a sample VxD that demonstrates the steps necessary to reflect a
	hot key into the system virtual machine. Some Windows-based applications
	implement shortcut ("hot") keys by establishing a Windows hook that scans the
	stream of keystrokes typed and responds to the hot key. While this technique
	works correctly within the Windows system virtual machine in 386 enhanced mode,
	the hot key will not be recognized while an MS-DOS virtual machine (VM) has the
	focus because the keystroke will not be visible to the Windows system virtual
	machine. In order to define a "global" hot key that is active even while an
	MS-DOS- based application is running, a virtual device (VxD) must be written to
	perform this task. This article describes the steps for writing such a VxD.
	
	MORE INFORMATION
	================
	
	VHotKeyd.exe sets up a global hot key through the VKD_Define_Hot_Key service.
	The hot key handler schedules a system-VM- specific event that will force the
	focus to the system VM through the System_Control service and force the
	keystroke into the system VM through the VKD_Reflect_Hot_Key service. Instead of
	the VKD_Reflect_Hot_Key service, you can use the VKD_Force_Keys service.
	However, in that case the hot key handler must explicitly call
	VKD_Cancel_Hot_Key_state. Furthermore, the hot key must be defined with the
	Local_key option and must be locally disabled for the system VM. The advantage
	of using VKD_Force_Keys is that the hot key is inserted into the VM's virtual
	keyboard buffer so that keystrokes submitted before the hot key will still be
	processed in the VM's context.
	
	In any case, a switch to the system virtual machine will not take place if one of
	the following is true:
	
	- The virtual machine being switched away from is in a critical section
	
	- The virtual machine runs exclusively.
	
	In these cases, VHotKeyd.exe uses the VKD_Force_Keys technique.
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vhotkeyd.exe
	  (http://download.microsoft.com/download/winddk/samp58/1/W31/EN-US/Vhotkeyd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDK 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
