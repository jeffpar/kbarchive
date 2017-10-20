---
layout: page
title: "Q151900: PRB: SeeThru Property of Graph Control Was Not Implemented"
permalink: /kb/151/Q151900/
---

## Q151900: PRB: SeeThru Property of Graph Control Was Not Implemented

{% raw %}

	Article: Q151900
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVBp400 kbDOCError
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the value of the SeeThru property of the Graph control has no effect on
	the behavior of the control.
	
	CAUSE
	=====
	
	The SeeThru property of the Graph control is present but it was not implemented
	in the Graph16.OCX or the Graph32.OCX controls. It was provided in the .VBX
	version of the Graph control so that the control could be placed on top of other
	controls. The primary reason for doing this was to allow a PictureBox control to
	provide a background for the graph. The Visual Basic development team did not
	think this was appropriate for an .OCX control, so this functionality was
	intentionally omitted. This change was not noted in the documentation for Visual
	Basic 4.0. The SeeThru property was retained to provide backward compatibility
	only.
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	There is no known workaround at this time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbVBp400 kbDOCError 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
