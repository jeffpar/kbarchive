---
layout: page
title: "Q220971: SAMPLE: VSSAddin.exe Notifies Administrator of SourceSafe Events"
permalink: /kb/220/Q220971/
---

## Q220971: SAMPLE: VSSAddin.exe Notifies Administrator of SourceSafe Events

{% raw %}

	Article: Q220971
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCPApplet kbCPLExt kbMAPI kbSSafe
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VSSAddin.exe sample program implements automatic notification of Visual
	SourceSafe events to specified individuals. This sample program demonstrates how
	to create a Control Panel application that is integrated with a Visual
	SourceSafe add-in.
	
	MORE INFORMATION
	================
	
	The VSSAddin.exe file is available for download from the Microsoft Download
	Center. Click the file name below to download the file:
	
	  VSSAddin.exe
	  (http://download.microsoft.com/download/vss60/utility/6.0/w9x/en-us/vssaddin.exe)
	
	Release Date: June 9, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Install the VSSAddin Program Files
	----------------------------------
	
	VSSAddin.exe is a self-extracting executable file; double-click it and the file
	extracts two folders, SSAddin and VSSCtlApp.
	
	The sample program consists of three projects:
	
	- A Control Panel application (VSSCtlApp.dsw) that allows an Administrator to
	  specify which events to send notification of, as well as the email and pager
	  address information of the individuals to notify. This application writes the
	  entered information to a file on the Visual SourceSafe server.
	
	- A Visual SourceSafe add-in (SSaddin.dsw) that reads the entered information
	  from the Visual SourceSafe server, handles the specified events, and sends
	  notification to the specified recipients.
	
	- A third project (VSSAddin.dsw) that creates the DLL that holds the icon for
	  the Control Panel application.
	
	Build the Control Panel Application
	-----------------------------------
	
	1. In Microsoft Visual C++, browse to the VSSCtlApp folder and open the
	  VSSCtlApp.dsw project.
	
	2. Open the MyDialog.cpp file and change the blank path on line 32 to the
	  universal naming convention (UNC) path of the file to create on the Visual
	  SourceSafe server. This path should resemble the following:
	
	  
	
	  \\\\Server\\Share\\Ssaddin.dat
	
	3. Save the MyDialog.cpp file, and then press F7 to create the VSSCtlApp.cpl
	  file.
	
	Build the Visual SourceSafe Add-in
	----------------------------------
	
	1. Browse to the SSAddin folder and open the Ssaddin.dsw project.
	
	2. Open the Ssaddin.cpp file. Change the blank path on line 35 to point to the
	  same file that you specified in the Control Panel application.
	
	3. Change the blank profile and password on lines 50 and 51 to be a valid
	  Microsoft Exchange profile and password.
	
	4. Save the Ssaddin.cpp file, and then press F7 to create the Ssaddin.dll file.
	
	Build the VSSAddin DLL
	----------------------
	
	1. Browse to the VSSCtlApp\VSSAddin folder and open the VSSAddin.dsw project.
	
	2. Press F7 to create the VSSAddin.dll file.
	
	Configure and Run the Application
	---------------------------------
	
	1. Copy the VSSAddin.dll and VSSCtlApp.cpl files into the %SystemRoot%\System32
	  folder.
	
	2. From a command prompt, register Ssaddin.dll with the following command:
	
	  "RegSvr32 ssaddin.dll" (without the quotation marks)
	
	3. Create a file named Ssaddin.ini in the VSS\Win32 folder where the Ssapi.dll
	  file is registered (in other words, the folder where you installed Visual
	  SourceSafe). This folder should also be the folder that the following
	  registry key points to:
	
	  
	
	 
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SourceSafe\SCCServerPath
	
	4. Open the Ssaddin.ini file and add the following line to it:
	
	  "SSAddIn.0=1" (without the quotation marks)
	
	5. Open Control Panel and start the VSSAddin application.
	
	6. Specify an event and the email address of someone to notify.
	
	7. Quit the VSSAddin application. There should now be a file with the name you
	  specified in the Control Panel application and Visual SourceSafe add-in
	  projects.
	
	8. Open Visual SourceSafe and make the specified event occur. The email address
	  that you specified should receive an email stating that the event occurred.
	
	REFERENCES
	==========
	
	For the latest Microsoft Knowledge Base articles and other support information
	for Visual SourceSafe, see the following page on the Microsoft Technical Support
	Web site:
	
	  http://support.microsoft.com/support/ssafe/
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q238556 HOWTO: Notify Other Team Members When Changing Source-Controlled
	  Projects
	
	  Q232536 HOWTO: Enumerate and Run Available Control Panel Applications
	
	  Q183106 HOWTO: Debug Control Panel Property Sheet Extensions
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Tom
	Christian, Microsoft Corporation.
	
	
	Additional query words: kbSSafe kbCPApplet kbCPLExt kbMAPI
	
	======================================================================
	Keywords          : kbfile kbSample kbCPApplet kbCPLExt kbMAPI kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	
	=============================================================================
	

{% endraw %}
