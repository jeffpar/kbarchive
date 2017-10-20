---
layout: page
title: "Q221704: BUG: FFCs - _URLComboBox in _internet.vcx Has Trouble with URLs"
permalink: /kb/221/Q221704/
---

## Q221704: BUG: FFCs - _URLComboBox in _internet.vcx Has Trouble with URLs

{% raw %}

	Article: Q221704
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3 kbGrpDSFox kbDSupport
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The _urlcombobox foundation class that ships with Visual FoxPro 6.0 facilitates
	navigation to various Internet resources. The _urlcombobox adds the prefix
	"http://" to any URL that is typed in. Entering a URL other than an http
	address, such as an ftp address, results in an invalid URL.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	The Visual Studio 6.0 Service Pack 3 readme erroneously lists this bug as being
	fixed. Service Pack 3 did not fix this bug.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program and run it:
	
	  PUBLIC ox
	  SET CLASSLIB to HOME() + "FFC\_INTERNET.VCX"  
	  ox=CREATEOBJECT("form1")
	  ox.Show
	  DEFINE CLASS form1 AS form
	  	Height = 87
	  	Width = 208
	  	Visible = .T.
	  	Name = "Form1"
	  	ADD OBJECT _urlcombobox1 AS _urlcombobox WITH ;
	  		Left = 0, ;
	  		Top = 12, ;
	  		Name = "_urlcombobox1"
	  	ADD OBJECT command1 AS commandbutton WITH ;
	  		Top = 48, ;
	  		Left = 48, ;
	  		Height = 27, ;
	  		Width = 84, ;
	  		Caption = "Navigate", ;
	  		Name = "Command1"
	  	PROCEDURE command1.Click
	  		thisform._urlcombobox1.navigate
	  	ENDPROC
	  ENDDEFINE
	
	2. Enter ftp.anyname.com into the URLComboBox.
	
	3. Expand the URLComboBox and choose the address typed in step 2.
	
	Notice that http:// has been added to the beginning of the URL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
