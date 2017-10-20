---
layout: page
title: "Q142156: PRB: Cannot See Objects on Back Tabs If Using VB SSTAB Control"
permalink: /kb/142/Q142156/
---

## Q142156: PRB: Cannot See Objects on Back Tabs If Using VB SSTAB Control

{% raw %}

	Article: Q142156
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe600 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SSTAB control is used in Visual Basic 4.0 to allow controls to be placed on
	different tabs and seen when the user clicks that tab. However, when using
	Source Code Control (SCC) in Visual Basic, if the form that the tab control is
	on is not checked out (read only), then only objects on the top level tab are
	seen no matter what tab is selected. This occurs in design mode.
	
	CAUSE
	=====
	
	Enabling Visual SourceSafe through the ADD-INS Manager forces Visual Basic into
	Strict read-only mode. The SSTAB control relies on being able to change the
	properties of the form when you click different tabs in the control. When Visual
	Basic is in strict read-only mode, it can't display the objects on the back tabs
	because Visual Basic won't allow changes to the form. For more information about
	how the SSTAB control displays child controls, please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q150417 PRB: Read-Only SSTab Does Not Display Child Controls Properly
	
	
	RESOLUTION
	==========
	
	The form can be checked out and will function normally in design mode. Also,
	removing Source Code Control from the ADD-INs Manager will allow the control to
	function properly.
	
	Another workaround would be to get the file from the Visual SourceSafe explorer
	and check the Make writable option on the get dialog box, then quit and restart
	Visual Basic.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is a limitation of the SSTAB control in Visual Basic. There is no way to
	address this behavior in Visual SourceSafe. The tab control would have to be
	re-written so that it doesn't rely on changing the Forms properties to display
	different tabs.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe600 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
