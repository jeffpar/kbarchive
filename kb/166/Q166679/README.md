---
layout: page
title: "Q166679: SMS: Smsacm32.exe Does Not Set Status to Success"
permalink: kb/166/Q166679/
---

## Q166679: SMS: Smsacm32.exe Does Not Set Status to Success

	Article: Q166679
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Smsacm32.exe is a Systems Management Server helper program designed to provide
	an install wrapper for Systems Management Server shared application support of
	Microsoft 32-bit applications. These include Microsoft Office 95 and Microsoft
	Office 97 or their individual components (such as Microsoft Word 7.0, Microsoft
	Excel 7.0 and so on). Smsacm32.exe was introduced as a 32-bit equivalent of
	Smssetup.exe, which is used to install shared versions of Microsoft 16-bit
	applications (such as Microsoft Office 4.2 or Microsoft Word 6.0).
	
	MORE INFORMATION
	================
	
	The primary use of Smsacm32.exe is in the Configuration Command Line of the
	Program Item Properties for shared Microsoft applications. When the program item
	is selected for the first time, the Configuration Command Line is started by
	Appstart.exe, which in turn starts the application's Microsoft Acme Setup
	(Setup.exe) to perform a workstation setup of the application. The 16-bit
	version of Smssetup.exe sets the following registry key to Success after a
	successful installation by Acme Setup:
	
	  HKEY_CLASSES_ROOT\SMS\APPICATIONS\<Application Registry Name>
	  \CONFIGURESCRIPT\STATUS
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	After STATUS is set to Success, Appstart.exe would not need to call Acme Setup
	again, but instead call the actual application executable from an available
	distribution server.
	
	However, Smsacm32.exe does not set the STATUS to Success after the successful
	installation of a shared application, but changes the status from Failed
	(changed during Acme Setup in case of failure) to Configure. This is due to the
	nature of Acme Setup 3.0, because it creates application icons under the Windows
	Explorer Start, Programs menu during installation of the application. The icons
	created by Program Group Control (PGC) for shared applications such as Access
	97, Word 97, and so forth are therefore only used for shared application setup
	and installation. The applications themselves are invoked in the normal way
	through the use of their shortcuts created from the Start, Programs menu on the
	task bar. These shortcuts in turn invoke Appstart.exe to start the application
	from an available distribution server.
	
	Additional query words: prodsms acmesetup taskbar
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
