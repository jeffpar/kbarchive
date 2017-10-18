---
layout: page
title: "Q195768: HOWTO: Profile an ISAPI DLL"
permalink: kb/195/Q195768/
---

## Q195768: HOWTO: Profile an ISAPI DLL

	Article: Q195768
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbISAPI kbDSupport kbiis400 kbiis500
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about profiling an ISAPI DLL. This information
	is not available in Microsoft Source Profiler documentation.
	
	MORE INFORMATION
	================
	
	Use the following steps to profile an ISAPI DLL:
	
	1. Build your DLL. Enable profiling and generation of a map file on the linker
	  options.
	
	2. Run this command on your ISAPI DLL:
	
	  prep /om /ft <yourDLL>.dll
	
	3. This generates a file called <yourDLL>._ll. Rename your original DLL to
	  something else and then rename the ._ll file to <yourDLL>.dll.
	
	4. Copy this profiling version of your ISAPI dll and profile.dll to the
	  directory where they will be run on your IIS server.
	
	5. Copy the following files from the \Microsoft Visual Studio\VC98\Bin directory
	  to where they will be run on your IIS server:
	
	  Profile.EXE, Profile.DLL, Profile.Ini.
	
	6. Set the __ProfileBPI and __ProfilePBO environment variables as per the
	  instructions in the Knowledge Base article:
	
	  Q117681 Profiling Windows NT Services
	
	7. Stop and restart IIS (to ensure that the environment variables are valid for
	  Inetinfo.exe while it is running) and then run whatever processes you are
	  going to use to exercise the code in your ISAPI DLL.
	
	  NOTE: To stop IIS 4.0, issue this command: net stop iisadmin /y To start Web
	  Publishing Service again, use: net start w3svc.
	
	8. Stop IIS and run these commands in the directory where the PBI and PBO files
	  are located:
	
	  prep /m <yourDLL>
	  plist <yourDLL>
	
	  NOTE: Do not add the .DLL extension onto these last two commands. Errors are
	  generated if .DLL extension is added.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q117681 Profiling Windows NT Services
	
	Visual C++ online documentation
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Scott
	deBeaubien, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbISAPI kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
