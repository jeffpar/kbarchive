---
layout: page
title: "Q105005: PRB: DDEInitiate() Gives Remote Data Not Accessible Dialog Box"
permalink: kb/105/Q105005/
---

## Q105005: PRB: DDEInitiate() Gives Remote Data Not Accessible Dialog Box

	Article: Q105005
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FoxPro for Windows the DDEInitiate() function may result in getting an
	undesirable "? Remote data not accessible. Start application
	'<appname>.EXE'?" dialog box.
	
	Code following the DDEInitiate() function may check for the return of -1, which
	indicates that the channel was not established; however, the code is not yet
	executed.
	
	CAUSE
	=====
	
	The default setting for the Safety clause of the DDESetOption() function is true
	(.T.). This setting specifies whether a dialog box is displayed when the
	DDEInitiate() function is used to establish a channel to a server application
	and the application is not currently open.
	
	RESOLUTION
	==========
	
	Issue the DDESetOption() function prior to the DDEInitiate() function to change
	the setting for Safety to false (.F.).
	
	For example, the following code establishes a DDE channel between Microsoft
	FoxPro for Windows and Microsoft Excel, even if Microsoft Excel is not presently
	minimized in the Windows background, without receiving the dialog box message
	mentioned above:
	
	     =DDESetOption("SAFETY",.F.)
	     DO WHILE .T.
	        =DDESetOption("TimeOut",10000)
	        iChannel=DDEInitiate("Excel","System")
	        =DDESetOption("TimeOut",2000)
	        IF iChannel !=-1   && If Excel is started, exit loop
	           EXIT
	        ELSE             && Start Excel & try to get channel
	           RUN /N3 d:\msoffice\excel\excel.exe   && Change this line
	                                        && according to your path to Excel.
	        ENDIF
	     ENDDO
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, pages L3-366, L3-374
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	Issue type        : kbprb
	
	=============================================================================
	
