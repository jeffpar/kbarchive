---
layout: page
title: "Q186236: PRB: SCC Project Opens Very Slowly with Norton Anti Virus"
permalink: kb/186/Q186236/
---

## Q186236: PRB: SCC Project Opens Very Slowly with Norton Anti Virus

	Article: Q186236
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Norton AntiVirus is installed, opening Visual FoxPro projects that are under
	Source Code Control (SCC) may take longer than expected. This problem is
	specific to Windows NT and only occurs if the Visual SourceSafe database used by
	the project is located on a different computer.
	
	RESOLUTION
	==========
	
	Turn Norton AntiVirus off before modifying Visual FoxPro projects that are under
	Source Code Control.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual SourceSafe (VSS) on two computers running under Windows NT.
	
	2. On Computer #1 install and enable Norton AntiVirus (NAV) version 4.0.
	
	3. From Computer #1 map a drive to the directory on Computer #2 where the Visual
	  SourceSafe database is stored.
	
	4. Run the Visual SourceSafe Client and select the VSS database that resides on
	  Computer #2.
	
	5. Create a Visual FoxPro project on Computer #2 and add it to SourceCode
	  control, making sure that it is added to the VSS database on Computer #2.
	
	6. On Computer #1 run Visual FoxPro and use the "Join Source Control Project"
	  option, to get access to the project on Computer #2. Make sure that you
	  specify a working directory that is local to Computer #1. Close the project.
	
	7. Open the Project that is now in the working directory as specified in step 6.
	
	8. Note the time that it takes the computer to start the project.
	
	9. Close the Project.
	
	10. Disable Norton AntiVirus.
	
	11. Repeat steps 6 and 7.
	
	NOTE: With Norton AntiVirus enabled the Project under SCC opened slowly, almost
	4-5 times slower that when NAV is disabled.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176350 HOWTO: Open Visual SourceSafe to a Specific Database
	
	Additional query words: kbDSupport kbdse ssfox kbSSafe500 kbVFp500a kbVFp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbVFP500a kbSSafe500
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
