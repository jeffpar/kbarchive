---
layout: page
title: "Q111375: PC Forms: Doc Err: Making a Check Box Read-Only"
permalink: /kb/111/Q111375/
---

## Q111375: PC Forms: Doc Err: Making a Check Box Read-Only

{% raw %}

	Article: Q111375
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 90 of the Microsoft Electronic Forms Designer version 1.0 "Developer's
	Guide" lists steps for making a 3-D check box read-only. After using the
	instructions, when you select the check box in the Read form, the following
	error message appears:
	
	  Out of Stack Space
	
	Both the mouse event and the code provided on page 90 are incorrect. The Click
	event should be MouseUp and the code should be replaced with the following:
	
	     If gUnpackaging = False Then
	   
	        If chkTest.Value = True Then
	           chkTest.Value = False
	        Else
	           chkTest.Value = True
	        End If
	   
	     End If
	
	
	Additional query words: 1.00 read only checkbox checkboxes boxes
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
