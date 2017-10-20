---
layout: page
title: "Q141921: HOWTO: How to Support Two File Extensions per MFC Document Type"
permalink: /kb/141/Q141921/
---

## Q141921: HOWTO: How to Support Two File Extensions per MFC Document Type

{% raw %}

	Article: Q141921
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Applications built with the Microsoft Foundation Classes (MFC) document or view
	architecture have at most one file extension associated with each document type.
	This default file extension, if specified, is stored in the document template
	string stored in the string table.
	
	It is often useful to associate two file extensions with a given document type.
	This article describes a technique you can use to allow two file extensions to
	be stored in the document template string. Through class derivation and function
	overrides, it is possible to associate both file extensions with the document
	template.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	Use the following steps to associate two file extensions with a single document
	type in either SDI or MDI applications.
	
	1. Modify the string table entry so that it contains two file extensions. The
	  two extensions are entered into the filterExt field separated by a semicolon
	  (for example, .aaa;.bbb). The document template string may look similar to
	  this:
	
	  \nExts\nExts\nFiles (*.aaa; *.bbb)\n.aaa;.bbb\nExts.Doc\nExts Doc.
	
	2. Derive a class from CMultiDocTemplate for MDI applications, or
	  CSingleDocTemplate for SDI applications. Add this class to your project, and
	  use it when creating the document templates in your InitInstance function.
	  You will need to create a constructor that simply calls the base class
	  constructor.
	
	     CMyMultiDocTemplate::CMyMultiDocTemplate(
	        UINT nIDResource, CRuntimeClass* pDocClass,
	        CRuntimeClass* pFrameClass, CRuntimeClass* pViewClass ) :
	        CMultiDocTemplate(nIDResource, pDocClass, pFrameClass, pViewClass)
	        { };
	
	3. Override the GetDocString function in your class derived from
	  CMultiDocTemplate or CSingleDocTemplate in step 2.
	
	     BOOL CMyMultiDocTemplate::GetDocString(CString& rString,
	                              enum DocStringIndex i) const
	     {
	          CString strTemp,strLeft,strRight;
	          int nFindPos;
	          AfxExtractSubString(strTemp, m_strDocStrings, (int)i);
	
	          if(i == CDocTemplate::filterExt)  {
	            nFindPos=strTemp.Find(';');
	            if(-1 != nFindPos) {
	              //string contains two extensions
	              strLeft=strTemp.Left(nFindPos+1);
	              strRight="*"+strTemp.Right(lstrlen((const
	              char*)strTemp)-nFindPos-1);
	              strTemp=strLeft+strRight;
	            }
	          }
	      rString = strTemp;
	      return TRUE;
	     }
	
	4. Override CMyMultiDocTemplate::MatchDocType so that both file extensions are
	  recognized when a file is opened.
	
	     CDocTemplate::Confidence CMyMultiDocTemplate::MatchDocType(const
	          char* pszPathName, CDocument*& rpDocMatch)
	     {
	          ASSERT(pszPathName != NULL);
	          rpDocMatch = NULL;
	
	          // go through all documents
	          POSITION pos = GetFirstDocPosition();
	          while (pos != NULL)
	          {
	             CDocument* pDoc = GetNextDoc(pos);
	             if (pDoc->GetPathName() == pszPathName) {
	                // already open
	                rpDocMatch = pDoc;
	                return yesAlreadyOpen;
	             }
	          }  // end while
	
	          // see if it matches either suffix
	          CString strFilterExt;
	          if (GetDocString(strFilterExt, CDocTemplate::filterExt) &&
	            !strFilterExt.IsEmpty())
	          {
	             // see if extension matches
	             ASSERT(strFilterExt[0] == '.');
	             CString ext1,ext2;
	             int nDot = CString(pszPathName).ReverseFind('.');
	             const char* pszDot = nDot < 0 ? NULL : pszPathName + nDot;
	
	             int nSemi = strFilterExt.Find(';');
	             if(-1 != nSemi)   {
	               // string contains two extensions
	               ext1=strFilterExt.Left(nSemi);
	               ext2=strFilterExt.Mid(nSemi+2);
	               // check for a match against either extension
	               if (nDot >= 0 && (lstrcmpi(pszPathName+nDot, ext1) == 0
	                   || lstrcmpi(pszPathName+nDot,ext2) ==0))
	                 return yesAttemptNative; // extension matches
	             }
	             else
	             { // string contains a single extension
	               if (nDot >= 0 && (lstrcmpi(pszPathName+nDot,
	                   strFilterExt)==0))
	               return yesAttemptNative;  // extension matches
	             }
	          }
	          return yesAttemptForeign; //unknown document type
	     }
	
	5. To make Save and Save As function correctly, override the DoSave function in
	  your CDocument-derived class. Simply cut and paste the MFC implementation of
	  CDocument::DoSave() from Mfc\Src\Doccore.cpp into your derived class.
	
	  Replace these lines:
	
	          // append the default suffix if there is one
	          CString strExt;
	          if (pTemplate->GetDocString(strExt, CDocTemplate::filterExt) &&
	              !strExt.IsEmpty())
	          {
	             ASSERT(strExt[0] == '.');
	             newName += strExt;
	          }
	
	  with these lines:
	
	          // append the default suffix if there is one
	          CString strExt;
	          if (pTemplate->GetDocString(strExt, CDocTemplate::filterExt) &&
	              !strExt.IsEmpty())
	          {
	            ASSERT(strExt[0] == '.');
	
	            int nSemi;                       //added
	            if(nSemi = strExt.Find(';'));    //added
	            strExt = strExt.Left(nSemi);     //added
	
	            newName += strExt;
	          }
	
	  The three added lines of code return the first extension by default when Save
	  As is processed for a document type that has two extensions specified in its
	  document string. The user must type over this extension if a file is to be
	  saved with the second extension specified in the document string.
	
	  You will also need to replace the following lines of code:
	
	        CATCH_ALL(e)
	        {
	        TRACE0("Warning: failed to delete file after failed SaveAs.\n");
	        DELETE_EXCEPTION(e);
	        }
	
	  with:
	
	        CATCH_ALL(e)
	        {
	        TRACE0("Warning: failed to delete file after failed SaveAs.\n");
	        e->Delete();     //modified
	        }
	
	  This is necessary because the DELETE_EXCEPTION() macro is undefined in this
	  context.
	
	6. (16-bit Editions Only) Use Class Wizard to provide OnFileSave and
	  OnFileSaveAs command handlers in your derived document class. This is
	  necessary because in the 16-bit versions of Visual C++, the DoSave function
	  is not virtual. Simply cut and paste the contents of the base class versions
	  of both functions from Mfc\Src\Doccore.cpp into your command handlers. The
	  resulting functions call the local copy of DoSave rather than the base class
	  version. It may be necessary to add #include "io.h" to your project to
	  provide a definition for the _access function.
	
	REFERENCES
	==========
	
	Please see the following article in the Microsoft Knowledge Base:
	
	  Q198538 DocMgrEx.exe Assoc Multiple File Extensions w/1 Doc Type
	
	Additional query words: kbinf 1.50 1.51 1.52 2.00 2.50 3.00 3.10
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
