---
layout: page
title: "Q163788: INFO: FoxISAPI and Personal Web Server from FrontPage"
permalink: /kb/163/Q163788/
---

## Q163788: INFO: FoxISAPI and Personal Web Server from FrontPage

{% raw %}

	Article: Q163788
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbvfp500 kbvfp600 kbFrontPage97 kbFrontPage98
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Now that Personal Web Server supports ISAPI, the FoxISAPI sample can run on the
	Personal Web Server that comes with FrontPage 97 or FrontPage 98.
	
	MORE INFORMATION
	================
	
	The FoxISAPI sample is supported only with Internet Information Server (IIS) on
	Windows NT 3.51, but will also work with Windows NT 4.0 and FrontPage 97 or
	FrontPage 98. It is strongly recommended that you download the updated version
	of the FoxISAPI sample in order to work with FrontPage 97 or FrontPage 98 and
	Windows NT 4.0.
	
	You can currently download the updated version of the FoxISAPI sample from:
	
	  http://www.microsoft.com/vfoxpro owner's area
	
	Please follow the instructions and download the Foxisapi.exe file (Other Samples
	and Tools).
	
	Follow the steps stated in the first Knowledge Base article listed in the
	REFERENCES section below to set up FoxISAPI for IIS. For FoxISAPI to work with
	FrontPage 97 or FrontPage 98, follow the same steps, but install the files to
	the C:\WEBSHARE\SCRIPTS directory instead of the C:\Inetsrv\Scripts directory
	for Internet Information Server (IIS).
	
	REFERENCES
	==========
	
	For more information about setting up FOXISAPI with Internet Information Server
	(IIS), please see the following articles in the Microsoft Knowledge Base:
	
	  Q158838 HOWTO: Setup the FOXISAPI Sample on Windows NT 4.0
	
	  Q158839 INFO: Updated Readme.txt file for VFP FoxIsapi Sample
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp500 kbvfp600 kbFrontPage97 kbFrontPage98 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
