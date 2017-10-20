---
layout: page
title: "Q221750: FIX: Upsizing to SQL 7.0 with Currency Type Fails"
permalink: /kb/221/Q221750/
---

## Q221750: FIX: Upsizing to SQL 7.0 with Currency Type Fails

{% raw %}

	Article: Q221750
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbSQLServ kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kb
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upsizing a table containing a currency field to SQL Server 7.0, it could
	return the error:
	
	  Connectivity error: [Microsoft][ODBC SQL Server Driver][SQL Server]Implicit
	  conversion from data type char to money is not allowed. Use the CONVERT
	  function to run this query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Upsize a table that contains a currency field.
	
	2. Once upsizing is complete, a project created by the Upsizing process appears.
	
	3. Run the reports in the project and look for the error listed in the SYMPTOMS
	  section above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbSQLServ kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
