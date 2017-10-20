---
layout: page
title: "Q135672: Why Coldconfirm Property Is Not Used in Frmaddremove Form"
permalink: /kb/135/Q135672/
---

## Q135672: Why Coldconfirm Property Is Not Used in Frmaddremove Form

{% raw %}

	Article: Q135672
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Add and Remove example from the Controls application, the form
	frmaddremove defines a new property called coldconfirm. This property is not
	used.
	
	MORE INFORMATION
	================
	
	The coldconfirm property description states that this new property is used to
	save the previous SET CONFIRM setting before the form is called. In the Add and
	Remove example from the Controls application this property is not used because
	the form is using a private data session. The Load event procedure states this
	fact. The following comment is taken from the Load event procedure of the
	frmaddremove form:
	
	  * Because the CONFIRM setting is scoped to the data session, which
	  * is scoped to the form, there is no need to store the existing
	  * setting and restore it when the form is closed.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
