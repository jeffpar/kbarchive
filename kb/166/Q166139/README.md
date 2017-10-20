---
layout: page
title: "Q166139: HOWTO: Display Graphic on Each Tab of SSTab at Runtime"
permalink: /kb/166/Q166139/
---

## Q166139: HOWTO: Display Graphic on Each Tab of SSTab at Runtime

{% raw %}

	Article: Q166139
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you can display a graphic on each tab of a SSTab
	ActiveX control at run time.
	
	MORE INFORMATION
	================
	
	The SSTab control is an ActiveX control that ships with Visual FoxPro 5.x. The
	SSTab control provides a group of tabs, each of which acts as a container for
	other controls.
	
	The steps below demonstrate how to create an example of one of these controls:
	
	1. Create a form.
	
	2. Add the SSTab ActiveX control to the form. By default, SSTab always has three
	  pages.
	
	3. Change the name of the control from Olecontrol1 to SStab1.
	
	4. Add a Command button to the form and change the Caption property to "Set
	  Picture."
	
	5. In the Click method of the Command button, put in the following code:
	
	        FOR cPage = 0 to 2
	             THISFORM.SSTab1.Object.Tab = cPage   &&select the current page
	             THISFORM.SSTab1.Object.Picture = ;
	                 LoadPicture(home()+"samples\graphics\bmps\outline\leaf.bmp")
	             ** In Visual FoxPro 6.0, change the LoadPicture() function to:
	             ** LoadPicture(Home()+"Fox.bmp")
	        ENDFOR
	        THISFORM.SSTab1.Object.Tab = 0
	
	6. Save and run the form.
	
	When the form is running, click on the Command button to display the graphic on
	each tab.
	
	NOTE: Remember, the tab in SSTab ActiveX control always begins with 0.
	
	The Picture property of the SSTab control requires an object reference, and the
	LoadPicture function returns an object reference to the graphic file.
	
	The LoadPicture function supports the bitmap (.bmp), icon (.ico), or Windows
	metafile (.wmf) graphical formats.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
