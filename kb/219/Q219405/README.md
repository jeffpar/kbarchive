---
layout: page
title: "Q219405: SAMPLE: SSApplet.exe Connects to SourceSafe via Web Using Java"
permalink: kb/219/Q219405/
---

## Q219405: SAMPLE: SSApplet.exe Connects to SourceSafe via Web Using Java

	Article: Q219405
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbAutomation kbJavaVM kbSSafe600 kbVJ600 kbDSupport kbGrpDSSSafe
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft virtual machine 
	- Microsoft Visual J++, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SSApplet.exe is a sample that attaches to a Visual SourceSafe database and
	allows SourceSafe actions to occur through a Web site.
	
	This sample was written using Visual J++ 6.0. It uses the Windows Foundation
	Classes for Java and contains the source code. It should be opened in and
	compiled from inside Visual J++.
	
	In order for this sample to be used on a Web site, you must create a share called
	\\Werver\Wwwroot that is the root Web location. This share is used to display a
	list of files on the Web.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  SSApplet.exe
	  (http://download.microsoft.com/download/vss60/sample/6.0/WIN98/EN-US/SSApplet.exe)
	
	Release Date: Jan-21-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	+--------------------------------------+
	| FileName              | Size         | 
	+--------------------------------------+
	| Codebase.dat          | 29 bytes     | 
	+--------------------------------------+
	| Default.htm           | 990 bytes    | 
	+--------------------------------------+
	| DLL.java              | 2,201 bytes  | 
	+--------------------------------------+
	| IVSS.java             | 1,323 bytes  | 
	+--------------------------------------+
	| IVSSCheckout.java     | 2,410 bytes  | 
	+--------------------------------------+
	| IVSSCheckouts.java    | 1,781 bytes  | 
	+--------------------------------------+
	| IVSSDatabase.java     | 2,701 bytes  | 
	+--------------------------------------+
	| IVSSEventHandler.java | 1,269 bytes  | 
	+--------------------------------------+
	| IVSSEvents.java       | 4,785 bytes  | 
	+--------------------------------------+
	| IVSSItem.java         | 7,610 bytes  | 
	+--------------------------------------+
	| IVSSItems.java        | 1,770 bytes  | 
	+--------------------------------------+
	| IVSSVersion.java      | 2,456 bytes  | 
	+--------------------------------------+
	| IVSSVersions.java     | 1,317 bytes  | 
	+--------------------------------------+
	| VSSDatabase.java      | 3,052 bytes  | 
	+--------------------------------------+
	| VSSFileStatus.java    | 937 bytes    | 
	+--------------------------------------+
	| VSSFlags.java         | 2,776 bytes  | 
	+--------------------------------------+
	| VSSItem.java          | 8,108 bytes  | 
	+--------------------------------------+
	| VSSItemType.java      | 865 bytes    | 
	+--------------------------------------+
	| VSSVersion.java       | 2,807 bytes  | 
	+--------------------------------------+
	| SSApplet.sln          | 513 bytes    | 
	+--------------------------------------+
	| SSApplet.suo          | 8,192 bytes  | 
	+--------------------------------------+
	| SSApplet.vjp          | 24,174 bytes | 
	+--------------------------------------+
	| SSApplet_high.htm     | 9,473 bytes  | 
	+--------------------------------------+
	| SSApplet_low.htm      | 3,137 bytes  | 
	+--------------------------------------+
	| t0.gif                | 284 bytes    | 
	+--------------------------------------+
	| t1.gif                | 293 bytes    | 
	+--------------------------------------+
	| t2.gif                | 295 bytes    | 
	+--------------------------------------+
	| t3.gif                | 288 bytes    | 
	+--------------------------------------+
	| upload.htm            | 1,719 bytes  | 
	+--------------------------------------+
	| IActionTalker.java    | 876 bytes    | 
	+--------------------------------------+
	| ICommandFeedback.java | 1,104 bytes  | 
	+--------------------------------------+
	| LList.java            | 1,621 bytes  | 
	+--------------------------------------+
	| VSSApp.java           | 1,239 bytes  | 
	+--------------------------------------+
	| VSSApplet.java        | 1,397 bytes  | 
	+--------------------------------------+
	| VSSContextMenu.java   | 6,104 bytes  | 
	+--------------------------------------+
	| VSSPanel.java         | 25,170 bytes | 
	+--------------------------------------+
	
	Security
	--------
	
	COM components can get access to any system resources. As such, they are both
	very powerful and potentially very dangerous. In the Microsoft virtual machine
	for Java (Microsoft VM) provided in Microsoft Internet Explorer 3.0 and later,
	only trusted class files can use COM components. Class files from digitally
	signed CAB files are trusted.
	
	If the HTML file is run from Microsoft Developer Studio, the class files are also
	trusted. This can be very helpful during applet development. However, to deliver
	your applet to other users, you must put it in a signed CAB file.
	
	Because this CAB file is run as an applet, the class file may be downloaded to
	your computer. There is a potential security threat in running downloaded
	software. To run a Java applet that uses COM components, the applet code must be
	trusted. For more information on CAB and Sign technology, look in the
	Cab&Sign folder on the Visual J++ CD-ROM. The Visual J++ CD-ROM also
	includes a sample called CabAndSign that gives step-by-step instructions on how
	to create CAB files and Test Certificates.
	
	NOTE: The HTML page for this sample uses the Microsoft Agent to tell the user
	what to do and also to display error messages. See the "References" section to
	find more information about the Microsoft Agent.
	
	REFERENCES
	==========
	
	For the latest Microsoft Knowledge Base articles and other support information
	on Visual J++ and Visual SourceSafe, see the following pages on the Microsoft
	Technical Support site:
	
	  http://support.microsoft.com/support/visualj/
	
	  http://support.microsoft.com/support/ssafe/
	
	For more information about the Microsoft Agent, see the following page on the
	Microsoft web site:
	
	  http://www.microsoft.com/msagent/
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Tom
	Christian, Microsoft Corporation.
	
	
	Additional query words: SSApplet
	
	======================================================================
	Keywords          : kbfile kbsample kbAutomation kbJavaVM kbSSafe600 kbVJ600 kbDSupport kbGrpDSSSafe 
	Technology        : kbVJsearch kbSSafeSearch kbAudDeveloper kbVMSearch kbVJ600 kbSSafe600
	Version           : WINDOWS:6.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
