---
layout: page
title: "Q137730: PRB: Cannot Pass Parameters as Float ByVal to VB 4.0 Events"
permalink: /kb/137/Q137730/
---

## Q137730: PRB: Cannot Pass Parameters as Float ByVal to VB 4.0 Events

{% raw %}

	Article: Q137730
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OLE Custom Controls cannot pass parameters as Float ByVal to Visual Basic
	version 4.0 events.
	
	RESOLUTION
	==========
	
	Change the ByVal float param to a float*.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code in the Bind OLE Custom Control
	------------------------------------------
	
	  void CBindCtrl::OnLButtonUp(UINT nFlags, CPoint point)
	  {
	  // TODO: Add your message handler code here and/or call default
	
	     float fHH = 100.9f ;
	
	  // Floatbug is an event in the OCX
	      FireFloatbug(&fHH) ;
	
	     COleControl::OnLButtonUp(nFlags, point);
	  }
	
	Sample Code in the Bind OLE Custom Control Event in Visual Basic 4.0
	--------------------------------------------------------------------
	
	  Private Sub Bind1_Floatbug(fTmp As Single)
	     MsgBox CStr(fTmp)
	  End Sub
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
