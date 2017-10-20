---
layout: page
title: "Q153682: BUG: MaskedEdit Control Misbehaves When DragMode Set to 1"
permalink: /kb/153/Q153682/
---

## Q153682: BUG: MaskedEdit Control Misbehaves When DragMode Set to 1

{% raw %}

	Article: Q153682
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the DragMode property of the MaskedEdit control to 1-Automatic results
	in abnormal control behavior by either not displaying the mask prompt
	characters, making the control's background transparent, or disabling editing
	during run time. Any or all of these symptoms may be encountered depending on
	whether you are running 16- or 32-bit Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 4.0 for
	Windows. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following is a step-by-step example showing how this problem can be
	reproduced in 16- and 32-bit Visual Basic:
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Select the Custom Controls option from the tools menu. When the Custom
	  Controls dialog box appears, select "Microsoft Masked Edit Control" from the
	  Available Controls list.
	
	3. Add a MaskedEdit control with properties set as follows:
	
	     BackColor      &H000000FF&
	     DragMode       1- Automatic
	     Mask           ####
	
	4. Run the sample program. If you are running 32-bit Visual Basic, the Mask
	  prompt characters fail to appear, and control editing is disabled. In 16-bit,
	  in addition to the above problems, the background color becomes transparent.
	
	Additional query words: 4.00vb4win vb4all MaskedEdit
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
