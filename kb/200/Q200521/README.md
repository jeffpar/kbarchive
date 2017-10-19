---
layout: page
title: "Q200521: SMSINST: Self-registered OCX or DLL Converted to Short File Name"
permalink: /kb/200/Q200521/
---

## Q200521: SMSINST: Self-registered OCX or DLL Converted to Short File Name

	Article: Q200521
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsmsInst smsinst
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Installer allows for the self-registration of a DLL or
	OCX. If the DLL or OCX uses a long file name, the file name is converted to an
	8.3 equivalent before being self-registered into the registry.
	
	For example, if a file called "TwoPlusTwoEqualsFour.ocx" were installed on a
	user's machine in the directory C:\ADD, the file would self-register under
	HKEY_CLASSES_ROOT\CLSID\<guid>\ as "C:\ADD\TWOPLU~1.OCX" instead of the
	long file name.
	
	CAUSE
	=====
	
	Systems Management Server Installer converts DLL and OCX file names queued for
	self-registration to short file names.
	
	WORKAROUND
	==========
	
	Do not self-register these files using Installer's Self-Register feature. For
	each Install File script item that installs an OCX or DLL with a long file name,
	make sure the Self-register OCX/DLL option is not selected within the script
	item properties.
	
	Alternatively, use Regsvr32.exe, a command line registration tool provided with
	Microsoft Visual Studio 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. This has been fixed in Systems Management Server version
	2.0.
	
	Additional query words: smsinst prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsmsInst smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
