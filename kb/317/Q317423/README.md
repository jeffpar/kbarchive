---
layout: page
title: "Q317423: SMS: Software Inventory Agent Generates an Invalid Page Fault"
permalink: /kb/317/Q317423/
---

## Q317423: SMS: Software Inventory Agent Generates an Invalid Page Fault

	Article: Q317423
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers that run Microsoft Windows 95, Microsoft Windows 98, or
	Microsoft Windows Millennium Edition (Me) may raise an exception if you
	configure the Systems Management Server (SMS) Software Inventory process to
	collect inventory information about .exe and .dll files.
	
	The following entries may be recorded in the %Windir%\MS\SMS\Logs\Sinv32.log
	file:
	
	  ====== Logging initialized for module "Software Inventory Agent" =======
	  Software Inventory Agent cycle started ..... !
	  AppRegister Software Inventory Agent - Event Driven (6)
	  AppRegister Software Inventory Agent - Restart Driven (6)
	  Reschedule agent to launch on boot.
	  Maximum Collected File Size: 1 (MB)
	  Inventory Type: exe
	  Inventory Type: dll
	  Preloading history file ......
	  Scanning Drives ......
	  <<<<<<<<<<<<< EXCEPTION EXCEPTION
	  EXCEPTION >>>>>>>>>>>>>
	  (Logged to all threads) An exception was raised in the application 'Software
	  Inventory Agent', thread 0xfc28ebe5 (Main Thread)~ <<CLIEXCEPT>>
	  A fatal exception occurred in THIS THREAD. Information follows:~
	  <<CLIEXCEPT>> The exception was not an MFC CException. A detailed
	  information dump will follow...
	
	You may also receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	If you click Details, you may see the following information:
	
	  SINV32 caused an invalid page fault in module KRNL386.EXE.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version         Size     File name        Platform
	  ----------------------------------------------------------------------
	  25-Mar-2002  14:47                       65  Compversinv.ini
	  25-Mar-2002  14:47  2.0.92.09       280,446  Insinv32.exe     
	  25-Mar-2002  14:47  2.00.1250.0007  762,688  Preinst.exe      
	  25-Mar-2002  14:47  2.00.1493.3239  104,816  Sinv32.exe       
	  25-Mar-2002  14:47                       65  Compversinv.ini
	  25-Mar-2002  14:47  2.0.92.09       511,613  Insinv32.exe     
	  25-Mar-2002  14:47  2.00.1493.3239  151,312  Sinv32.exe       Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use any of the following methods.
	
	- Determine which file is causing the problem, and then obtain an updated
	  version of this file from the software manufacturer. For information about
	  how to determine which file is causing the issue to occur, please see the
	  "More Information" section of this article.
	
	- Because this problem occurs only with computers that are running Microsoft
	  Windows 95, Microsoft Windows 98 or Microsoft Windows Millennium Edition
	  (Me), you can upgrade to Microsoft Windows NT or Microsoft Windows 2000.
	
	- Turn off the software inventory on the client computer. For additional
	  information about how to do so, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q255959 Turning Off Software Inventory on a Single Client
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	Use the Hotfix Installer:
	
	NOTE: This method works on Intel platforms only.
	
	1. Copy the hotfix folder structure to a share on your network. The Q317423.exe
	  file is a Microsoft Windows Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server by using an account with administrative
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Start Q317423.exe and follow the directions in the wizard. You can run the
	  program in Quiet mode by using the /s switch.
	
	How to Determine Which File Is Causing the Problem
	--------------------------------------------------
	
	1. Obtain and install Filemon (a utility that monitors file activity) from the
	  following Sysinternals Web site:
	
	  http://www.sysinternals.com
	
	2. Start Filemon on a computer with this issue.
	
	3. In the SMS tool in Control Panel, start the Software Inventory component from
	  the Components tab.
	
	4. Wait until you receive the "illegal operation" error message.
	
	5. In Filemon, note of the last file that was accessed by Sinv32.exe.
	
	6. In Windows Explorer, right-click the file you noted in step 5, and then click
	  the Version tab. You should receive the "illegal operation" error message
	  again.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
