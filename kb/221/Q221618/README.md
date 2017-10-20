---
layout: page
title: "Q221618: FIX: Form Wizard Error Sorting by 2 Fields with DBCS Names"
permalink: /kb/221/Q221618/
---

## Q221618: FIX: Form Wizard Error Sorting by 2 Fields with DBCS Names

{% raw %}

	Article: Q221618
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In "Step 3 - Sort Records" of the Form Wizard, add a field whose name and the
	name of one of its index tags is comprised of Chinese characters. If you add
	another field, the following error occurs:
	
	  You cannot combine index tags and fields.
	
	NOTE: The above mentioned error may also occur with Japanese or Korean
	characters.
	
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
	
	1. Open the Customer table in testdata.dbc.
	
	2. Change the two field names "cust_id" and "company" and the related index
	  names so that all the letters are Chinese characters.
	
	3. Issue a CLOSE ALL in the Command window.
	
	4. Launch Form Wizard and select the Customer.dbf.
	
	5. Select several fields at step 1 of the wizard and click the Next button
	  twice.
	
	6. Add one of the two fields that has a Chinese field name into the Selected
	  fields list box at step 3 of the wizard.
	
	7. Then, try to add any other fields, except the index tags, into the Selected
	  fields list box.
	
	Note that the error message mentioned at the beginning of this article will
	occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
