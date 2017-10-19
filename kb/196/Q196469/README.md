---
layout: page
title: "Q196469: FIX: MSDN Library Does Not Support CD Server Installation"
permalink: /kb/196/Q196469/
---

## Q196469: FIX: MSDN Library Does Not Support CD Server Installation

	Article: Q196469
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:1.21; winnt:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp100fix kbMSDN600bug kbMSDN1098bug
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) October 98 
	- Microsoft HTML Help 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the MSDN Visual Studio 6.x or MSDN October 1998 Library
	from a CD-ROM Server or CD jukebox server, the viewer does not work as expected.
	When you try to open topics, you get the following error message:
	
	  Internet Explorer cannot open the Internet Site
	  mk:@MSStore:\\ABC\CD1\MSDN\vsintro.chm/html/vsstartpage.htm
	
	  %1 could not be found.
	
	CAUSE
	=====
	
	When you run the Setup.exe from a shared CD CD-DRIVE, the HhColReg.dat file
	contains invalid pointers to content (.chm files). For example, in the previous
	error message, "\\ABC\CD1\MSDN\vsintro.chm" represents the location that the
	Setup.exe was installed from and the topic that you are attempting to view.
	
	RESOLUTION
	==========
	
	There are four ways to resolve this problem.
	
	Obtain the April 1999 or Greater Version of the MSDN Library
	
	------------------------------------------------------------
	
	1. This problem has been corrected in the April 1999 MSDN Library.
	
	Option 2: Copy All of the CD Bits the Local Machine or a Network Location
	-------------------------------------------------------------------------
	
	For additional information how to create a network installation, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q196440 PRB: Problems Running MSDN Library from a Network Installation
	
	Option 3: Share CD 2 and CD 3 on a CD Server
	--------------------------------------------
	
	1. Insert CD 1 into the workstation and install the product.
	
	2. Run the product. When you are prompted to insert CD 2, enter the UNC for CD
	  2, and do the same when you are prompted for CD 3.
	
	  NOTE: When you use this option, each customer must have CD 1 on his or her
	  local computer, available for access.
	
	Option 4: Modify the HhColReg.dat File (UNSUPPORTED and NOT recommended)
	------------------------------------------------------------------------
	
	1. Create share points for all CDs. For example, you can use the following share
	  points: \\ABC\CD1, \\ABC\CD2, \\ABC\CD3.
	
	2. On the Start menu, click Run, type \\ABC\CD1 in the Open: text box, and run
	  the Setup.exe for MSDN.
	
	3. Open the HhColReg.dat file (in the %WinDir%\Help directory). You will see the
	  following sections:
	
	        <Locations>
	        <Location>
	           <LocColNum value=1/>
	           <LocName value="98OCT-1033-Local"/>
	           <TitleString value="Local"/>
	           <LocPath value="C:\Program Files\Microsoft Visual
	                           Studio\MSDN98\98OCT\1033\"/>
	           <Volume value="ABCS300"/>
	        </Location>
	        <Location>
	           <LocColNum value=1/>
	           <LocName value="98OCT-1033-CD3"/>
	           <TitleString value="MSDN October 1998 CD3"/>
	           <LocPath value="\\ABC\CD1\MSDN\"/>  **NEED TO CHANGE**
	           <Volume value="dnq830enu1"/> **NEED TO CHANGE**
	        </Location>
	        <Location>
	           <LocColNum value=1/>
	           <LocName value="98OCT-1033-CD2"/>
	           <TitleString value="MSDN October 1998 CD2"/>
	           <LocPath value="\\ABC\CD1\MSDN\"/>  **NEED TO CHANGE**
	           <Volume value="dnq830enu1"/> **NEED TO CHANGE**
	        </Location>
	        <Location>
	           <LocColNum value=1/>
	           <LocName value="98OCT-1033-VC Samples"/>
	           <TitleString value="MSDN October 1998 CD1"/>
	           <LocPath value="\\ABC\CD1\MSDN\"/>
	           <Volume value="dnq830enu1"/>
	        </Location>
	        </Locations>
	        ...
	
	        <DocCompilation>
	           <DocCompId value="vsintro"/>
	           <DocCompLanguage value=1033/>
	           <LocationHistory>
	              <ColNum value=1/>
	        **NEED TO CHANGE**<TitleLocation
	                           value="\\ricks266\CD1\MSDN\vsintro.chm"/>
	              <IndexLocation value="C:\Program Files\Microsoft Visual
	                                    Studio\MSDN98\98OCT\1033\vsintro.chi"/>
	        **NEED TO CHANGE**<QueryLocation
	                           value="\\RICKS266\CD1\MSDN\MSDN830.CHQ"/>
	              <LocationRef value="98OCT-1033-CD2"/>
	              <Version value=29200603/>
	              <LastPromptedVersion value=0/>
	              <TitleSampleLocation value=""/>
	              <TitleQueryLocation value="98OCT-1033-CD2"/>
	              <SupportsMerge value=0/>
	           </LocationHistory>
	        </DocCompilation>
	
	You need to change the items marked **NEED TO CHANGE**. The following changes to
	these items enable you to view the Visual Studio Start Page topic from a shared
	CD server.
	
	        ...
	        <LocPath value="\\ABC\CD3\MSDN\"/>
	        <Volume value="13"/>
	        ...
	        <LocPath value="\\ABC\CD2\MSDN\"/>
	        <Volume value="14"/>
	        ...
	        <TitleLocation value="\\ABC\CD2\MSDN\vsintro.chm"/>
	        ...
	        <QueryLocation value="\\ABC\CD2\MSDN\MSDN830.CHQ"/>
	        ...
	
	You need to make the changes mentioned previously, for all DocCompilations. In
	the example above, the path for the VSIntro.chm file has been corrected. Also,
	please note that "Volume value=" needs to be a unique value.
	
	The HhColReg.dat file contains many DocCompilations that must be corrected to
	provide a fully functional MSDN Viewer. All the DocCompilations require the same
	type of changes.
	
	STATUS
	======
	
	This problem has been fixed in the April 1999 version of the MSDN Library.
	
	MORE INFORMATION
	================
	
	The HHCOLREG.DAT is a very important file for the MSDN Viewer. Any modification
	of this file is unsupported because it can break the ability to use collections
	within the viewer. Changing this file could potentially break other collections.
	Therefore, it is not recommended that you modified this file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp100fix kbMSDN600bug kbMSDN1098bug 
	Technology        : kbHTMLHelpSearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbHTMLHelp121 kbMSDNOct98
	Version           : WINDOWS:1.21; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
