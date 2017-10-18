---
layout: page
title: "Q221676: FIX: &quot;Error #1234 in remotizeviews&quot; Using SQL Upsizing Wizard"
permalink: kb/221/Q221676/
---

## Q221676: FIX: &quot;Error #1234 in remotizeviews&quot; Using SQL Upsizing Wizard

	Article: Q221676
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbODBC kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upsizing a database that has local views, when the views are being
	remotized, the following error may occur:
	
	  Error #1234 in remotizeviews(0). Subscript is outside defined range
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Upsizing Wizard for SQL Server Step 1, select a database with a local
	  view, and then choose Next.
	
	2. In the Upsizing Wizard for SQL Server Step 2, select a SQL Server datasource
	  suitable to use for upsizing, click Next and then select login.
	
	3. In the Upsizing Wizard for SQL Server, select the tables on which the local
	  views are based, click Finish, and then click Finish again.
	
	NOTE: This does not occur with every local view that is upsized.
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbODBC kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
