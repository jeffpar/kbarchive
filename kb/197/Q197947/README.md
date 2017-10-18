---
layout: page
title: "Q197947: HOWTO: Get Computer Information Using ADSI"
permalink: kb/197/Q197947/
---

## Q197947: HOWTO: Get Computer Information Using ADSI

	Article: Q197947
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0; winnt:2.5
	Operating System(s): 
	Keyword(s): kbADSI kbvfp600
	Last Modified: 16-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Active Directory Service Interfaces (ADSI) to obtain network
	computer information from within Visual FoxPro. This article shows an example of
	how to obtain this information.
	
	
	MORE INFORMATION
	================
	
	NOTE: To use the following example, you must install the Active Directory
	Service Interfaces from the following Web site or the Microsoft Developer
	Network CD:
	
	  http://www.microsoft.com/windows/server/Technical/directory/adsilinks.asp
	
	ADSI is a COM-based interface for accessing directory services. You can treat
	each element of the network, such as users, printers, and computers, as an
	object. Accessing the properties of the computer object allows the developer to
	get information about the computer. The following code demonstrates how to do
	this. Save the following code to a program file and run the program.
	
	Sample Code
	-----------
	
	  *-- Code begins here.
	  *-- Change MyDomain and MyComputer to valid domain and computer names.
	  oComputer = GetObject("WinNT://MyDomain/MyComputer")
	
	  *-- Get the properties for the oComputer object and display them.
	  lsInfo = "GUID:  " + oComputer.GUID + CHR(13) +;
	
	           "Owner:  " + oComputer.Owner + CHR(13) +;
	           "Division:  " + oComputer.Division + CHR(13) +;
	           "Operating System:  " + oComputer.OperatingSystem + CHR(13) +;
	           "OS Version:  " + oComputer.OperatingSystemVersion + CHR(13) +;
	           "Processor:  " + oComputer.Processor + CHR(13) +;
	           "Processor Count:  " + oComputer.ProcessorCount
	
	  WAIT WINDOW lsInfo
	  *-- Code ends here.
	
	REFERENCES
	==========
	
	Visual Studio Microsoft Developer Network Library, version 6.0; search on: "ADSI
	Computer Object"
	
	For more information on developing Web-based solutions for Internet Explorer,
	please see the following Web sites:
	
	  http://msdn.microsoft.com/workshop/default.asp
	
	  http://msdn.microsoft.com/ie/
	
	  http://support.microsoft.com/highlights/iep.asp?FR=0&SD=MSDN
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbADSISearch kbADSI250 kbVFP600
	Version           : WINDOWS:6.0; winnt:2.5
	Issue type        : kbhowto
	
	=============================================================================
	
