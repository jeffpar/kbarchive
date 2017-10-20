---
layout: page
title: "Q221614: FIX: Remote View Wizard Gives Error with Spaces in Table Name"
permalink: /kb/221/Q221614/
---

## Q221614: FIX: Remote View Wizard Gives Error with Spaces in Table Name

{% raw %}

	Article: Q221614
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport k
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Remote View Wizard to connect to a Visual FoxPro table, you
	receive the following error in the final step of the wizard:
	
	  Connectivity error:[Microsoft][ODBC Visual FoxPro Driver]Command contains
	  unrecognized phrase/keyword.
	
	When you press OK in this error dialog box, an Open dialog box appears. Choosing
	Cancel in the Open dialog box causes the following error:
	
	  No table is open in the current work area.
	
	CAUSE
	=====
	
	The table name contains a space.
	
	RESOLUTION
	==========
	
	Here are two possible workarounds:
	
	- Remove the space from the table name.
	
	  -or-
	
	- Upgrade to Visual Studio Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a free table and give it a name that contains a space, such as Test 1.
	
	2. Add some data and close the table.
	
	3. Using the Visual FoxPro ODBC driver, create a datasource that points to the
	  table. In the Visual FoxPro driver ODBC setup, make sure to select the "Free
	  Table" option button.
	
	4. In Visual FoxPro, create a database.
	
	5. Add a remote view to the database by using the Remote View Wizard.
	
	6. Choose the datasource created in step 3.
	
	7. Select some fields and click Finish.
	
	8. Choose Save remove view and browse, press Finish, and then provide a name for
	  the remove view.
	
	The error described in the Symptoms section occurs.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
