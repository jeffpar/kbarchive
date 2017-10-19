---
layout: page
title: "Q221730: FIX: Enabled_Assign Fires Incorrectly for Container in Container"
permalink: /kb/221/Q221730/
---

## Q221730: FIX: Enabled_Assign Fires Incorrectly for Container in Container

	Article: Q221730
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a container class that contains an Assign method for the Enabled or
	some other logical property. You create another container class based on this
	original container class. You create a third container class based on the
	original container. This third container class also contains an instance of the
	second container class. If you add an instance of the third container class to a
	form, and toggle the value of logical property in the member container, the
	parameter passed to the Assign method for the member container will be of
	numeric rather than logical data type.
	
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
	
	1. Type the following in the Command window:
	
	  CREATE CLASS basecontainer AS CONTAINER OF test.vcx
	
	2. From the Class menu, select Edit Property/Method.
	
	3. Highlight the Enabled property in the Property/Method information list box.
	
	4. Click the Assign Method check box and then click the Apply and Close buttons.
	
	5. Add this code to the Enabled_assign method:
	
	  LPARAMETERS lNewVal
	  THIS.Enabled = m.lNewVal
	  IF VARTYPE( m.lNewVal) # "L"
	     MESSAGEBOX( "Enabled_Assign was passed a non-logical value." ; 
	        + chr(13) + "The value passed was "+trans(m.lNewVal))
	  ENDIF
	
	6. Save and close the class.
	
	7. Type the following in the Command window:
	
	  CREATE CLASS SubCont OF test.vcx AS basecontainer FROM test.vcx
	
	8. Save and close the class.
	
	9. Type the following in the Command window:
	
	  CREATE CLASS OtherCont OF test.vcx AS basecontainer FROM test.vcx
	
	10. In the Class Designer, add an instance of the SubCont class to the OtherCont
	  container.
	
	11. Save and close the class.
	
	12. Create a new form called Test.
	
	13. Add an instance of the OtherCont class to the form.
	
	14. Right-click on OtherCont1 and select Edit from the context menu.
	
	15. Click the SubCont1 container.
	
	16. Change the Enabled property of SubCont1 to .F. in the Property Window.
	
	17. Save and run the form.
	
	18. You should see the message where the enabled_assign method is receiving a
	  non-logical parameter.
	
	Notes: This will also occur with other logical properties such as Visible.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
