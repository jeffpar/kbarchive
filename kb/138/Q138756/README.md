---
layout: page
title: "Q138756: FIX: Cursor Editor Fill Tool Doesn't Affect BackGround Pixels"
permalink: /kb/138/Q138756/
---

## Q138756: FIX: Cursor Editor Fill Tool Doesn't Affect BackGround Pixels

{% raw %}

	Article: Q138756
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbui _IK920 kbVC kbVC600fix kbGrpDSTools
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Fill tool in the cursor editor, you can paint on the colored
	pixels but may not be able to paint on the background.
	
	RESOLUTION
	==========
	
	Following are some possible workarounds:
	
	- Change the display color resolution.
	
	- Use one of the other tools, such as the pencil, the brush, or the airbrush.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Insert a Cursor Resource.
	
	2. In the color palette, select the Black color.
	
	3. Select the pencil tool, and draw an empty circle.
	
	4. In the color palette, select the White color.
	
	5. Select the fill tool (looks like a paint can), and try to paint inside the
	  circle. You'll notice that nothing happens. If you click the circle border,
	  you can paint, but you can't paint the background pixels.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbui _IK920 kbVC kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
