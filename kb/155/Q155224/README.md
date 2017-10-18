---
layout: page
title: "Q155224: PRB: Using CEdit SetModify/GetModify Returns Invalid Values"
permalink: kb/155/Q155224/
---

## Q155224: PRB: Using CEdit SetModify/GetModify Returns Invalid Values

	Article: Q155224
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbEditCtrl kbMFC KbUIDesign kbVC400 kbVC420 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The CEdit::GetModify() and CEdit::SetModify() methods may be unreliable when the
	CEdit object is part of CEditView. Further, using these methods on a CEdit
	object that is part of a CEditView object may cause CEditView::LockBuffer(),
	CEditView::GetBufferLength(), and other CEditView methods to return invalid
	values.
	
	CAUSE
	=====
	
	Under Windows 95 and Win32s, CEditView uses CEdit::GetModify() and
	CEdit::SetModify() to indicate when an internal buffer--which mirrors the
	contents of the edit control--is current. As a result, you can experience
	unpredictable behavior if the class you derive from CEditView also uses this
	flag, for example:
	
	RESOLUTION
	==========
	
	The easiest workaround is to ignore the edit control's internal modified flag
	and define your own in the class you derived from CEditView:
	
	     class CMyEditView : public CEditView
	     {
	     public:
	        BOOL GetModify() { return m_bModified; }
	        void SetModify(BOOL bModified) { m_bModified = bModified; }
	        // Additional public members...
	     protected:
	        BOOL m_bModified;
	        // Additional protected members...
	     };
	
	Keep this flag current by overriding OnChange() in the class you derived from
	CEditView. OnChange() is called any time the contents of the underlying edit
	control changes:
	
	     void CMyEditView::OnChange()
	     {
	        m_bModified = TRUE;
	
	           //Call base class's EN_CHANGE handler
	           CEditView::OnEditChange();
	     }
	
	MORE INFORMATION
	================
	
	CEdit::GetModify() and CEdit::SetModify() access an internal "dirty" flag that
	is maintained by the standard Windows edit control. These methods are useful in
	determining if the contents of an edit control have been modified since this
	flag was cleared.
	
	Due to limitations under Win32s and Windows 95, the MFC classes set an internal
	flag, afxData.bWin32s, to TRUE during initialization under either of these
	systems. When this flag is TRUE, CEditView uses a modified method to obtain the
	contents of the underlying edit control. Instead of reading data from the edit
	control each time you need it, CEditView maintains an internal buffer that
	mirrors the contents of the edit control. To ensure this buffer is updated when
	the contents of the edit control change, CEditView uses CEdit::GetModify() and
	CEdit::SetModify(). This can cause serious conflicts if your application also
	uses these methods.
	
	The problem is clearly demonstrated in the source code for
	CEditView::LockBuffer(). Instead of accessing the control directly each time,
	CEditView::LockBuffer() copies the edit control's contents to a local buffer.
	Then CEditView::LockBuffer() calls CEdit::SetModify() with an argument of FALSE
	to clear the dirty flag. If your program calls CEditView::LockBuffer() or one of
	the many CEditView members that call it, the buffer is updated only if
	CEdit::GetModify() returns TRUE (which indicates the edit control's contents
	have changed and the local buffer is no longer current).
	
	Because CEditView::LockBuffer() clears the edit control's modified flag, your
	program no longer relies on this flag. Please note, if your program clears this
	flag, CEditView::LockBuffer() returns the contents of the local buffer even if
	the contents of the edit control has changed. CEditView::LockBuffer() is also
	called by other CEditView members, such as GetBufferLength() and FindText().
	
	Additional query words: 4.00 4.10 4.20 kbdsd W32s Win95
	
	======================================================================
	Keywords          : kbEditCtrl kbMFC KbUIDesign kbVC400 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbprb
	
	=============================================================================
	
