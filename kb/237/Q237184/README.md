---
layout: page
title: "Q237184: FIX: Err Branching from Label &quot;You do not have access rights..&quot;"
permalink: /kb/237/Q237184/
---

## Q237184: FIX: Err Branching from Label &quot;You do not have access rights..&quot;

{% raw %}

	Article: Q237184
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug kbSSafe600fix kbSSExplorer kbGrpDSSSafe kbSSafe600qfe kbVS6
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A label is placed in a project that contains two or more subprojects. At least
	one of the subprojects is deleted after you apply the label. When you try to
	branch off the label the following errors occur:
	
	  File or project not found.
	
	  -and-
	
	  You do not have access rights to $/<Deleted Subproject>.
	
	These two error messages occur for each subproject deleted after the label was
	applied. The branch eventually occurs but the deleted subproject does not appear
	in the branched project.
	
	RESOLUTION
	==========
	
	To work around the problem, temporarily disable project security in the Visual
	SourceSafe Administrator before branching off the label. You will need to close
	and reopen the VSS Explorer in order for the update to occur. After the branch
	occurs you can enable project security again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Also, a supported fix for Visual SourceSafe 6.0 that corrects this problem is now
	available from Microsoft, but it has not been fully regression tested and should
	be applied only to systems experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------------------------------------------------+
	| Name         | Size      | Date       | Time     | Version#  | Platform | 
	+-------------------------------------------------------------------------+
	| analyze.exe  |   211,968 | 10/22/1999 | 01:27 AM | 6.0.86.60 | x86      | 
	| ddconv.exe   |   310,784 | 10/22/1999 | 12:55 AM | none      | x86      | 
	| ddupd.exe    |   443,392 | 10/22/1999 | 12:58 AM | none      | x86      | 
	| ss.exe       |   415,744 | 10/22/1999 | 12:48 AM | none      | x86      | 
	| ssapi.dll    |   591,360 | 10/22/1999 | 12:52 AM | 6.0.86.60 | x86      | 
	| ssarc.exe    |   528,384 | 10/22/1999 | 01:02 AM | 6.0.86.60 | x86      | 
	| ssrestor.exe |   526,336 | 10/22/1999 | 01:05 AM | 6.0.86.60 | x86      | 
	| ssscc.dll    | 1,501,696 | 10/22/1999 | 01:38 AM | 6.0.86.60 | x86      | 
	+-------------------------------------------------------------------------+
	
	All files are contained in a self-extracting EXE.
	
	+-------------------------------------------------------------+
	| Name         | Size      | Date       | Time     | Platform | 
	+-------------------------------------------------------------+
	| VSS8660.EXE  | 2,178,219 | 10/31/1999 | 11:31 AM | x86      | 
	+-------------------------------------------------------------+
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the VSS Administrator. From the Tools menu, choose Options and click the
	  Project Security tab. Make sure that the Enable Project Security checkbox is
	  selected. Click OK and then close the VSS Administrator.
	
	2. Open the VSS Explorer. Create a project off the root ($/) named $/Test1.
	
	3. In $/Test1, create a subproject named Test1a.
	
	4. In $/Test1, create another subproject named Test1b.
	
	5. Add a file to each project; $/Test1, $/Test1/Test1a, and $/Test1/Test1b
	  respectively.
	
	6. Place a label named TestLbl in $/Test1.
	
	7. Delete (but do not permanently destroy) $/Test1/Test1b. If you see a dialog
	  box that contains the following text, click Yes:
	
	  Delete all specified items?
	
	8. Right-click $/Test1 and select Show History. If the Project History Options
	  dialog box appears, make sure the Include Labels and Labels only checkboxes
	  are selected. If you are using Visual SourceSafe 5.0, make sure the Recursive
	  and Labels only checkboxes are selected in the Project History Options dialog
	  box. Click OK.
	
	9. Select label TestLbl and click the Share button.
	
	10. When the Share From dialog box appears, select a project (other than the
	  root project) to which you want to branch. Select the Branch after share
	  checkbox. Click OK.
	
	11. When the Share dialog box appears, make sure the Recursive checkbox is
	  selected. Give the branched project a new name or accept the default project
	  name. Click OK.
	
	REFERENCES
	==========
	
	For additional information about branching, please see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q150064 HOWTO: Branch to a Specific Version of a Project
	
	  Q157982 INFO: Understanding Promotions
	
	Additional query words: sp4 project security
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug kbSSafe600fix kbSSExplorer kbGrpDSSSafe kbSSafe600qfe kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
