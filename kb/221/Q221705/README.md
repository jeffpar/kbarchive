---
layout: page
title: "Q221705: FIX: FFCs - _URLComboBox in _internet.vcx Large Drop-Down Issue"
permalink: kb/221/Q221705/
---

## Q221705: FIX: FFCs - _URLComboBox in _internet.vcx Large Drop-Down Issue

	Article: Q221705
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbOOP kbvfp600 kbFFC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, using the _URLCombobox foundation class with a very long
	name causes the drop-down list of the combobox to be cut off on the left side of
	the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add the _URLCombobox class in the _internet.vcx onto the form. _internet.vcx
	  is in the ..\FFC subdirectory of the Visual FoxPro directory.
	
	3. Add a command button to the form.
	
	4. In the Click event of the command button, put in the following code:
	
	  Thisform._URLCombobox1.navigate
	
	5. Save and run the form.
	
	6. In the combo box, type in the following long URL name:
	
	  http://search.support.microsoft.com/searchbin/kb/search.idq?
	  D=Support&A=T&T=B&SG=&S=F&SD=SO&T1=&FR=0&DU=C&Sz=use+and+offline+
	  and+ado+and+recordsets+and+visual+and+foxpro&O=How+to+use+Offline+
	  ADO+Recordsets+in+Visual+FoxPro
	
	7. Once the URL is typed into the combo box, click the command button to launch
	  Internet Explorer to navigate to the site listed above.
	
	8. Once you get to the site, close down Internet Explorer and go back to the
	  form.
	
	9. Now, click on the drop-down list of the combo box.
	
	  Note that the long URL name in the dropdown list is cut off on the left side
	  of the screen.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbOOP kbvfp600 kbFFC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
