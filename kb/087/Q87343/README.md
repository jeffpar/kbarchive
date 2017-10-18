---
layout: page
title: "Q87343: Creating a Glossary Button in Windows Help"
permalink: kb/087/Q87343/
---

## Q87343: Creating a Glossary Button in Windows Help

	Article: Q87343
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HLPGLOSS is a file in the Microsoft Download Center that demonstrates how to add
	a Glossary button to the button bar in the Microsoft Windows Help application.
	The help file for the Windows Program Manager is an example of a popular help
	file that has a Glossary button. When the user chooses the Glossary button, Help
	displays the Glossary topic in a secondary window.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Hlpgloss.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To create a Glossary button, two items must be added to the Help project (.HPJ)
	file:
	
	1. In the [CONFIG] section, add the CreateButton macro, which creates the
	  "Glossary" button and programs the button to jump to the topic that contains
	  glossary information.
	
	  The third parameter of the CreateButton macro can contain the JumpContents,
	  JumpContext, or JumpID macro. Specify JumpContents to move to the Contents
	  topic of a Help file. Specify JumpContext to jump to the topic in a Help file
	  with a specific context number. Specify JumpID to jump to the topic in a Help
	  file with a specific context identifier. Any of these macros can move to a
	  topic in the current Help file or to a topic in a different Help file.
	
	  NOTE: If the glossary topic is in a different .HLP file, the [WINDOWS] section
	  in its .HPJ file must define the secondary window. For more information on
	  the CreateButton macro, see pages 309 and 310 of the "Programmer's Reference,
	  Volume 4: Resources" manual distributed with version 3.1 of the Microsoft
	  Windows Software Development Kit (SDK).
	
	2. In the [WINDOWS] section, add a definition for the secondary window in which
	  glossary information is displayed. This line defines the size, position, and
	  color of the secondary window. For more information on the [WINDOWS] section
	  of the .HPJ file, see pages 64 through 66 of the Windows SDK "Programming
	  Tools" manual.
	
	The following fragment of an .HPJ file demonstrates these two steps:
	
	  [CONFIG]
	  ; Because the help topic is in this Help file and the context
	  ; identifier is available, the code below specifies the JumpId (JI)
	  ; macro. The glossary is shown in the secondary "Glossary" window
	  ; specified in the [WINDOWS] section below. The peculiar single quotes
	  ; are significant. Note: In an actual Help project file, the following
	  ; information appears on one line (no break).
	  CreateButton("Glossary_Btn","&Glossary","JI(`hlpgloss.hlp>Gloss',
	  `Glossary_Context')")
	
	  [WINDOWS]
	  ; Define the secondary window for the glossary in the [WINDOWS]
	  ; section of the HPJ file for the Help file that contains the glossary
	  ; topic.
	  Gloss = "Glossary",(100,100,350,350),0,(255,255,255),(255,255,255)
	
	Additional query words: WinHelp HLPGLOSS kbfile kbtool
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
