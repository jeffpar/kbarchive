---
layout: page
title: "Q207952: PRB: Active Documents Flash and Disappear When Run"
permalink: kb/207/Q207952/
---

## Q207952: PRB: Active Documents Flash and Disappear When Run

	Article: Q207952
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbActiveDocs kbPrinting kbReportWriter kbvfp
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Active Document applications start and then immediately end. This may happen so
	quickly that the application does not even appear to start.
	
	CAUSE
	=====
	
	Here are three known causes for this behavior:
	
	- There is not a READ EVENTS command in the Run method of the ActiveDoc class.
	
	- The ActiveDoc class is not the main program in the project. This normally
	  causes the READ EVENTS in the Run method of the ActiveDoc class not to be
	  encountered.
	
	- The Windows' file association with the .app file extension is something other
	  than "Visual.FoxPro.Application.6".
	
	RESOLUTION
	==========
	
	To troubleshoot the problem, verify the following:
	
	1. Make sure that the ActiveDoc class is the main program in the project. To do
	  this, select the ActiveDoc class in the Project Manager Classes tab and
	  choose Set Main from the Project menu. The class should now appear in bold
	  face.
	
	2. Make sure there is a READ EVENTS command in the Run method of the ActiveDoc
	  class. It should be after the menu (if any) and form is run.
	
	3. If the ActiveDoc application still will not run after verifying both of the
	  above, check the file association for the .app file name extension in the
	  registry. Look under the following two keys:
	
	  HKEY_CLASSES_ROOT\.app
	  HKEY_LOCAL_MACHINE\Software\Classes\.app
	
	  Both should be set to "Visual.FoxPro.Application.6" for the Active Document
	  applications to run properly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Active Document applications are like other FoxPro executable files. They need a
	READ EVENTS to keep them from ending. This concept has been in FoxPro for many
	years with the Foundation Read in FoxPro 2.x and then with the READ EVENTS
	command in Visual FoxPro.
	
	When Active Document applications are run either in the Browser or Standalone,
	they use the Visual FoxPro runtime files, vfp6r.dll, vfp6run.exe and
	vfp6renu.dll. The runactd.prg file that is set as the default ActiveDoc Launcher
	in the Options dialog box, File Locations tab is what the Tools menu, Run Active
	Document command calls. This program has code to start the Active Document in
	the Browser or Standalone. If the .app file extension is not associated
	properly, the runtime files are not used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the steps in the following Microsoft Knowledge Base article if you do not
	  already have an Active Document application:
	
	  Q182579 HOWTO: Getting Started With Active Documents
	
	2. Set the form in the application to be the main program or remove the READ
	  EVENTS in the ActiveDoc class' Run method.
	
	3. Build the project into an application.
	
	4. From the Tools menu, choose Run Active Document. Locate the application that
	  was just built. In the Hosting drop-down list box, select either In Browser
	  or Stand Alone.
	
	5. Alternately, instead of step 2, change one of the registry values referred to
	  in the RESOLUTION section to "FoxPro" or any other text string and then
	  follow steps 3 and 4.
	
	REFERENCES
	==========
	
	For additional information about Active Document applications, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q182579 HOWTO: Getting Started With Active Documents
	
	  Q182580 HOWTO: Setting Up a Quick Menu for an ActiveDoc App
	
	  Q186015 HOWTO: Pass Parameters to an ActiveDoc
	
	  Q197861 SAMPLE: ADOCtl.Exe Demonstrates Active Documents, RDS and ADO
	
	  Q190771 FILE: Vfp6rt.exe Distributing Run-Time Files w/ Active Document
	
	Additional query words: kbDSupport kbDSE
	
	======================================================================
	Keywords          : kbprint kbActiveDocs kbPrinting kbReportWriter kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
