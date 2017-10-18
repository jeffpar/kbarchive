---
layout: page
title: "Q296904: HOWTO: Install the PocketPC Emulator with JScript Support"
permalink: kb/296/Q296904/
---

## Q296904: HOWTO: Install the PocketPC Emulator with JScript Support

	Article: Q296904
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbDSupport kbgraphxlinkcritical
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	- Microsoft eMbedded Visual C++, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	- Microsoft JScript, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to install and configure the Pocket PC Emulator that
	ships as part of Microsoft Embedded Visual Toolkit 3.0.
	
	By default, the Pocket PC Emulator does not have support for Microsoft JScript
	installed. If you want JScript support, see the last section of this article.
	
	MORE INFORMATION
	================
	
	Installing and Running Microsoft Embedded Visual Toolkit 3.0
	------------------------------------------------------------
	
	The following steps install the Pocket PC emulator with JScript support. Before
	performing the steps you must have a computer running either Microsoft Windows
	NT 4.0 or Microsoft Windows 2000.
	
	1. Download the Microsoft Embedded Visual Toolkit 3.0 from the following
	  Microsoft Web site:
	
	  http://www.microsoft.com/mobile/downloads/emvt30.asp
	
	2. Expand the toolkit files by double-clicking the EN_WINCE_EMBDVTOOLS30.exe
	  file that was downloaded in step 1.
	
	3. Using Windows Explorer, browse to the location where the files were expanded.
	  Execute the installation program by double-clicking the Setup.exe file, which
	  is in the DISK2\POCKTSDK folder. This will start the installation program for
	  the Pocket PC SDK.
	
	4. On the Welcome page, click Next.
	
	5. On the License Agreement page, read the End-User License Agreement (EULA). If
	  you agree to the terms of the agreement, click I accept the terms in the
	  license agreement, and then click Next.
	
	6. On the Customer Information page, type your User Name and Organization, and
	  then click Next.
	
	7. On the Destination Folder page, click Next.
	
	8. On the Setup Type page, click Next to do a complete installation.
	
	9. On the Ready to Install the Program page, click Install.
	
	10. Click Finish to complete the installation.
	
	11. Click the Start button, point to Programs, point to Microsoft Windows
	  Platform SDK for Pocket PC, and click Desktop Pocket PC Emulation.
	
	Install JScript Support for the Pocket PC Emulator
	--------------------------------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Jscript.exe
	  (http://download.microsoft.com/download/pocketpc/Install/1.0/WIN98MeXP/EN-US/Jscript.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	1. Download and expand Jscript.exe to access the JScript.dll file.
	
	2. Place the JScript.dll file in the following folder, where "X" is the drive
	  where the Pocket PC SDK was installed:
	
	  X:\Program Files\Windows CE Tools\wce300\MS Pocket
	  PC\Emulation\Palm300\Windows
	
	3. Open a command prompt and switch to the folder where the JScript.dll was
	  placed in step 2.
	
	4. Type the following at the command prompt and press ENTER:
	
	  "regsvrce.exe jscript.dll" (without the quotation marks)
	
	5. The Pocket PC Emulator should start automatically and should contain a
	  message box with the following message:
	
	  DllRegisterServer in
	  jscript.dll succeeded.
	
	  Click OK in the upper right corner of the message box to dismiss the message.
	
	Additional query words: simulator PocketPC
	
	======================================================================
	Keywords          : kbDSupport kbgraphxlinkcritical 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :1.0,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
