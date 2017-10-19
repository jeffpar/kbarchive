---
layout: page
title: "Q279184: FIX: Multiple Checkout Setting Disables Checkout Option"
permalink: /kb/279/Q279184/
---

## Q279184: FIX: Multiple Checkout Setting Disables Checkout Option

	Article: Q279184
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600bug kbSSafe600fix kbSSExplorer _IK kbGrpDSSSafe kbVS600sp5fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable multiple checkouts for each project, and someone checks out the
	file, the Checkout option is disabled for other users.
	
	RESOLUTION
	==========
	
	To resolve this problem, download Visual Studio 6.0 Service Pack 5 from the
	following Microsoft Web site:
	
	  http://support.microsoft.com/support/servicepacks/VS/6.0/default.asp?sd=msdn
	
	WORKAROUND
	----------
	
	To work around this problem, follow these steps:
	
	1. Right-click the project, and click Checkout.
	
	2. Use the command line to check the file out to multiple users.
	
	3. Right-click the file, and then click Edit. Under Admin, select the Allow
	  multiple checkouts check box so that multiple users can check out the file.
	
	4. Open Srcsafe.ini, and type "Multiple_Checkouts = No" (without the quotation
	  marks) in the headers of all the projects that the user wants to check out
	  exclusively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual SourceSafe 6.0 Admin, on the Tools menu, click Options.
	
	2. On the General tab, make sure that the Allow Multiple Checkouts check box is
	  cleared, and then click OK. Exit VSS 6.0 Administrator.
	
	3. In Visual SourceSafe 6.0 Explorer, create a project named $/TestChkOut, and
	  then add a file to this project. Close VSS 6.0 Explorer.
	
	4. Open the Srcsafe.ini file that corresponds to the VSS database.
	
	5. At the end of Srcsafe.ini, add a project header for $/TestChkOut as follows:
	
	  [$/TestChkOut]
	
	6. On the line after the project header, type:
	
	  "Multiple_Checkouts = Yes" (without the quotation marks)
	
	7. Save and then close Srcsafe.ini.
	
	8. In Visual SourceSafe 6.0 Explorer, check out the file in $/TestChkOut.
	
	9. On the File menu, click Open SourceSafe database. Type a different user name
	  in the Username text box, and then click Open.
	
	10. Right-click the file in $/TestChkOut. Notice that the Checkout option is
	  unavailable (grayed out).
	
	11. Click the file in $/TestChkOut. On the SourceSafe menu, notice that the
	  Checkout option is unavailable (grayed out).
	
	REFERENCES
	==========
	
	For additional information about how to set up multiple checkout for each
	project, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q138475 HOWTO: Set Up Multiple Check Outs on a Project Basis
	
	For additional information about Visual Studio 6.0 Service Pack 5, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q281691 INFO: Visual Studio 6.0 Service Pack 5, What, Where, Why
	
	Additional query words: vss admin
	
	======================================================================
	Keywords          : kbSSafe600bug kbSSafe600fix kbSSExplorer _IK kbGrpDSSSafe kbVS600sp5fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
