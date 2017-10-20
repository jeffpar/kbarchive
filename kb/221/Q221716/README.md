---
layout: page
title: "Q221716: FIX: Component Gallery Not Refreshing Dynamic Web View"
permalink: /kb/221/Q221716/
---

## Q221716: FIX: Component Gallery Not Refreshing Dynamic Web View

{% raw %}

	Article: Q221716
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, when you click on a folder set to a dynamic filename URL, a Web
	page does not update the right-hand pane of the Component Gallery until you move
	the mouse off the list treeview control.
	
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
	
	NOTE: This behavior can be difficult to reproduce on some machines.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Component Gallery.
	
	2. Click the Options toolbar button and make sure the Advanced Editing Enabled
	  check box is selected.
	
	3. Click the Visual FoxPro Catalog in the left-hand pane of the Component
	  Gallery.
	
	4. Right-click the right-hand pane and choose New Item and Folder.
	
	5. In the left-hand pane, right-click the New folder and choose Properties.
	  Select the Node tab and type the following in the Dynamic folder text box:
	
	"http://www.microsoft.com" (without the quotation marks)
	
	6. Position the cursor directly over the New folder in the left-hand pane and
	  click on the folder. Try not to move the mouse cursor when clicking on the
	  folder.
	
	If it fails, the right-hand pane that displays the Web page will not update until
	you move the cursor off the list treeview in the Component Gallery.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
