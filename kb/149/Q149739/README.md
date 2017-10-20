---
layout: page
title: "Q149739: BUG: MSRDC32.OCX Not Loaded Through Browse Button"
permalink: /kb/149/Q149739/
---

## Q149739: BUG: MSRDC32.OCX Not Loaded Through Browse Button

{% raw %}

	Article: Q149739
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Loading the Remote Data Control by clicking the Browse button in the Custom
	Controls dialog box from the Tools menu results in the error message
	
	  - Unable to load MSRDC32.OCX.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Load the Remote Data Control by clicking the option in the Available Controls
	list box of the Custom Controls dialog box. If this control is not listed in the
	list box, go to a Command prompt and find the program Regsvr32.exe. This program
	is located on the setup disk in the \Tools\PSS directory. Type the following
	line to register the control and press ENTER:
	
	  regsvr32 msrdc32.ocx
	
	Close the Command prompt. The Remote Data Control appears in the Custom Controls
	dialog box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 32-bit Visual Basic 4.0. If it is already running, on the File menu,
	  click New Project.
	
	2. On the Tools menu, click Custom Controls. The Custom Controls dialog box
	  appears.
	
	3. Click the Browse button and click Msrdc32.ocx. The error message appears.
	
	Additional query words: 4.00 vb4win vb432 RDC
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
