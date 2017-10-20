---
layout: page
title: "Q320567: Files Corrupted During Installation from Samsung DVD-ROM"
permalink: /kb/320/Q320567/
---

## Q320567: Files Corrupted During Installation from Samsung DVD-ROM

{% raw %}

	Article: Q320567
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbAudDeveloper
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network Subscriptions 
	- Microsoft Developer Network (MSDN) 
	- Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	- Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	- Microsoft Visual Studio.NET (2002), Professional Edition 
	- Microsoft Visual Studio.NET (2002), Academic Edition 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Visual Basic.NET (2002) 
	- Microsoft Visual C#.NET (2002) 
	-------------------------------------------------------------------------------
	
	The third-party products discussed in this article are manufactured by 
	vendors independent of Microsoft; we make no warranty, implied or 
	otherwise, regarding these products' performance or reliability.
	
	SYMPTOMS
	========
	
	You may experience various problems when you use the DELL/Samsung SM-308 and
	SN-308B DVD-ROM drive (the Dell Combo drive) to install Visual Studio .NET (VS
	.NET) or the Microsoft Developer Network (MSDN) Library.
	
	The issues described in this article can occur when you install VS .NET or its
	components, including the MSDN Library, but may not be noticeable until after
	the installation has completed.
	
	The following are some of the more common errors:
	
	- Various files are missing or read errors during setup.
	
	- You may receive the following error message when you start VS .NET or the
	  MSDN Library:
	
	  Help Update in Progress
	
	  Typically, this error message is followed by a Dr. Watson window, or you may
	  receive the following error message:
	
	  Microsoft development environment has encountered an error and needs to
	  close.
	
	CAUSE
	=====
	
	This behavior occurs because some files are not read properly from the DVD-ROM
	during the file copy phase of the setup process; some files may become
	corrupted.
	
	During some occurrences, you may receive an error message. During other
	occurences, you do not receive an error message and the file is copied without
	errors; however, a piece of the file is corrupted after the file is copied to
	your computer.
	
	RESOLUTION
	==========
	
	Firmware updates should resolve this issue:
	
	Desktop - Dimension 8200 - SM-308B Half Height, DVD/CDRW Combo SM-308B drive
	
	- A firmware upgrade for the T104 drive will be posted to the Dell Support Web
	  site:
	
	  Welcome to Dell Support (http://support.dell.com/)
	
	  (Search by your computer system, your operating system, and Removable Media
	  Storage Devices.)
	
	Notebook - Inspiron 8100 - SN-308B Slim Line drive
	
	- The current firmware update resolves this issue. Please see the following
	  support information from Dell:
	
	  Welcome to Dell Support (http://support.dell.com/)
	
	  (Search by your computer system, your operating system, and Removable Media
	  Storage Devices.)
	
	WORKAROUND
	==========
	
	For additional information about how to work around this problem, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q318945 BUG: Visual Studio .NET and MSDN Files Corrupted During Installation
	  from a DVD-ROM
	
	STATUS
	======
	
	This issue has occurred with previous versions of the DVD-ROM firmware and is
	believed to be resolved as stated.
	
	MORE INFORMATION
	================
	
	For additional information about this issue that is not specific to the
	DELL/Samsung SM-308 and SN-308B DVD-ROM drive (the Dell Combo drive), click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q318945 BUG: Visual Studio .NET and MSDN Files Corrupted During Installation
	  from a DVD-ROM
	
	For information about how to contact Dell or another vendor, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	REFERENCES
	==========
	
	For additional information about how to obtain replacements for damaged media,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q284230 INFO: Replacing Damaged or Defective Visual Studio Product Disks
	
	Additional query words: vsnetsetup, msdnnetsetup, msdnsetup, networkinstall
	
	======================================================================
	Keywords          : kbsetup kbAudDeveloper 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVSNETPro kbMSDNSubsc kbVBNET kbVCNET kbCSharpNET kbVSNETSearch kbVSNETEntDev kbVSNETEntArch kbVSNETAc
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
