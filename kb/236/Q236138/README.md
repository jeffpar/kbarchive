---
layout: page
title: "Q236138: BUG: Error Deleting VB ActiveX Control From Test Container"
permalink: kb/236/Q236138/
---

## Q236138: BUG: Error Deleting VB ActiveX Control From Test Container

	Article: Q236138
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbContainer kbGrpDSVB _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT, when deleting a Visual Basic 5.0 or Visual Basic 6.0
	UserControl sited in the ActiveX Control Test Container, the following
	Application Error might occur:
	
	  The instruction at "0x0041842c" referenced memory at "0x00000000". The memory
	  could not be "read"
	
	CAUSE
	=====
	
	This is caused by an errant WM_SETCURSOR message, which is sent after the DELETE
	key has been pressed to remove the control from the container. The code for the
	ActiveX Control Test Container (TSTCON32.EXE) does not check for a valid object
	before attempting to obtain a specific interface.
	
	RESOLUTION
	==========
	
	The source code for the ActiveX Control Test Container is located on the Visual
	Studio 6.0 MSDN CD in the "Samples\VC98\mfc\ole\tstcon" directory. The bug can
	be corrected by modifying the tcitem.cpp. Replace the HitTest method with the
	code below and recompile the tstcon project:
	
	  DWORD CTestContainer98Item::HitTest( CPoint point )
	  {
	     HRESULT hResult;
	     IViewObjectExPtr pViewObjectEx;
	     DWORD dwHitResult;
	
	     if( !m_rect.PtInRect( point ) )
	     {
	  	  // Trivially reject the point.
	  	  return( HITRESULT_OUTSIDE );
	     }
	
	     if (!m_lpObject)  return( HITRESULT_OUTSIDE );  
	
	     hResult = m_lpObject->QueryInterface( IID_IViewObjectEx,    
	  	     (void**)&pViewObjectEx );
	
	     if( SUCCEEDED( hResult ) )
	     {
	  	  hResult = pViewObjectEx->QueryHitPoint( DVASPECT_CONTENT,
	                      &m_rect, point, 0, &dwHitResult );
	  	  if( SUCCEEDED( hResult ) )
	  	  {
	  		 return( dwHitResult );
	  	  }
	     }
	
	     return( HITRESULT_HIT );
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem is caused by the following code segment, which is called after the
	object has been deleted and m_lpObject has been set to NULL:
	
	  hResult = m_lpObject->QueryInterface( IID_IViewObjectEx,          
	  	  (void**)&pViewObjectEx );
	
	Place the following code segment just prior to this QueryInterface method call to
	check whether m_lpObject is NULL, avoiding the problem:
	
	  if (!m_lpObject)  return( HITRESULT_OUTSIDE );  
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic ActiveX Control Project. Usercontrol1 is created by
	  default.
	
	2. Compile this ActiveX control as Project1.OCX.
	
	3. Start Microsoft Visual C++.
	
	4. On the Tools menu, select ActiveX Control Test Container.
	
	5. On the Edit menu of the ActiveX Control Test Container, select the Insert New
	  Control option. Select Project1.UserControl1 from the list box and click OK.
	
	6. Select the Project1.OCX control sited in the container and press the DELETE
	  key.
	
	The error message described in the symptoms section above should appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbContainer kbGrpDSVB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
