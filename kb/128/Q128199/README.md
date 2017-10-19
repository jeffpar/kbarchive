---
layout: page
title: "Q128199: HOWTO: Use _declspec(dllexport) in an MFC Extension DLL"
permalink: /kb/128/Q128199/
---

## Q128199: HOWTO: Use _declspec(dllexport) in an MFC Extension DLL

	Article: Q128199
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbDLL kbMFC kbVC200 kbVC400 kbhowto kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article supplements MFC TechNote #33. It contains some duplicate
	information, some corrections, and provides supplemental information to assist
	you in exporting classes or class members from an extension DLL.
	
	MORE INFORMATION
	================
	
	Building an Extension DLL
	-------------------------
	
	You can use AppWizard to create an MFC Extension DLL project, and it will
	automatically generate the appropriate compiler and linker settings. For more
	details, please see the AppWizard entry in the MFC Encyclopedia, which can be
	found in Books Online and in the printed documentation.
	
	If you are converting an existing project to an MFC Extension DLL, start with the
	standard rules for building an application using the _AFXDLL version of MFC.
	Then follow these steps:
	
	1. Add /D_AFXEXT to the compiler flags. On the Project Settings dialog box,
	  click the C/C++ tab. Then select the Preprocessor category. Add _AFXEXT to
	  the Preprocessor Definitions field, separating each of the items with commas.
	
	2. Remove the /Gy compiler switch. On the Project Settings dialog box, click the
	  C/C++ tab. Then select the C Language category. Ensure that the "Enable
	  Function-Level Linking" check box is cleared. This will make it easier to
	  export classes because the linker will not remove unreferenced functions. If
	  the original project is used to build a Regular DLL statically linked to MFC,
	  change the /MT[d] compiler option to /MD[d].
	
	3. Build an export library with the /DLL option to LINK. This will be set when
	  you create a new target, specifying Win32 Dynamic-Link Library as the target
	  type.
	
	Changing Your Header Files
	--------------------------
	
	The goal of an extension DLL is usually to export some common functionality to
	one or more applications that can use that functionality. This boils down to
	exporting classes and global functions, which are available for your client
	applications.
	
	To do this, you must ensure that each of the member functions is marked as import
	or export as appropriate. This requires special declarations:
	_declspec(dllexport) and _declspec(dllimport). When your classes are used by the
	client applications, you want them to be declared as _declspec(dllimport). When
	the extension DLL itself is being built, they should be declared as
	_declspec(dllexport). In addition, the functions must be actually exported, so
	that the client programs bind to them at load time.
	
	To export your entire class, use AFX_EXT_CLASS in the class definition. This
	macro is defined by the framework as _declspec(dllexport) when both _AFXDLL and
	_AFXEXT are defined, but as _declspec(dllimport) when _AFXEXT is not defined.
	_AFXEXT as described above, is only defined when building your extension DLL.
	
	For example:
	
	  class AFX_EXT_CLASS CExampleExport : public CObject
	     { ... class definition ... };
	
	This example exports an entire class.
	
	Not Exporting the Entire Class
	------------------------------
	
	Sometimes you may want to export just the individual necessary members of your
	class. MFC TechNote #33 discusses some reasons for this in the section titled
	"Ordinals and class _export and DLL naming." For example, if you are exporting a
	CDialog-derived class, you might only need to export the constructor and the
	DoModal call. You can export these members using the DLL's .DEF file, but you
	can also use AFX_EXT_CLASS in much the same way on the individual members you
	need to export.
	
	For example:
	
	  class CExampleDialog : public CDialog
	     {
	     public:
	
	       AFX_EXT_CLASS CExampleDialog();
	       AFX_EXT_CLASS int DoModal();
	       ...
	       // rest of class definition
	       ...
	
	     };
	
	When you do this, you may run into an additional problem due to the fact that you
	are no longer exporting all members of the class. The problem is in the way that
	MFC macros work. Several of MFC's helper macros actually declare or define data
	members. Therefore, these data members will also need to be exported from your
	DLL.
	
	For example, the DECLARE_DYNAMIC macro is defined as follows when building an
	extension DLL:
	
	     #define DECLARE_DYNAMIC(class_name) \ 
	     protected: \ 
	       static CRuntimeClass* PASCAL _GetBaseClass(); \ 
	     public: \ 
	       static AFX_DATA CRuntimeClass class##class_name; \ 
	       virtual CRuntimeClass* GetRuntimeClass() const; \ 
	
	The line that begins "static AFX_DATA" is declaring a static object inside of
	your class. To export this class correctly and access the run-time information
	from a client .EXE, you need to export this static object. Because the static
	object is declared with the modifier AFX_DATA, you only need to define AFX_DATA
	to be _declspec(dllexport) when building your DLL and define it as
	_declspec(dllimport) when building your client executable. As discussed above,
	AFX_EXT_CLASS is already defined in this way. So you just need to re-define
	AFX_DATA to be the same as AFX_EXT_CLASS around your class definition.
	
	For example:
	
	  #undef  AFX_DATA
	     #define AFX_DATA AFX_EXT_CLASS
	
	     class CExampleView : public CView
	     {
	
	       DECLARE_DYNAMIC()
	       // ... class definition ...
	
	     };
	
	     #undef  AFX_DATA
	     #define AFX_DATA
	
	MFC always uses the AFX_DATA symbol on data items it defines within its macros,
	so this technique will work for all such scenarios. For example it will work for
	DECLARE_MESSAGE_MAP.
	
	NOTE: if you are exporting the entire class rather than selected members of the
	class, static data members are automatically exported.
	
	Limitations of _AFXEXT
	----------------------
	
	You can use the _AFXEXT pre-processor symbol for your extension DLLs as long as
	you do not have multiple layers of extension DLLs. If you have extension DLLs
	that call or derive from classes in your own extension DLLs, which then derive
	from the MFC classes, you must use your own preprocessor symbol to avoid
	ambiguity and linker errors such as the following:
	
	  Wnd3.obj : error LNK2001: unresolved external symbol "protected: static
	  struct AFX_MSGMAP const CWnd2::messageMap"
	  (?messageMap@CWnd2@@1UAFX_MSGMAP@@B)
	
	The problem is that in Win32, you must explicitly declare any data as
	_declspec(dllexport) if it is to be exported from a DLL, and declare any data as
	_declspec(dllimport) if it is to be imported from a DLL. When you define
	_AFXEXT, the MFC headers make sure that AFX_EXT_CLASS is defined correctly. When
	you have multiple layers, one symbol such as AFX_EXT_CLASS is not sufficient
	because an extension DLL may be exporting new classes as well as importing other
	classes from another extension DLL.
	
	To deal with this problem, use a special pre-processor symbol that indicates you
	are building the DLL itself versus just using the DLL. For example, imagine two
	extension DLLs (A.DLL and B.DLL). They each export some classes in A.H and B.H,
	respectively. B.DLL uses the classes from A.DLL. The header files would look
	something like this:
	
	     // A.H
	     #ifdef A_IMPL
	         #define CLASS_DECL_A  _declspec(dllexport)
	     #else
	         #define CLASS_DECL_A  _declspec(dllimport)
	     #endif
	
	     class CLASS_DECL_A CExampleA : public CObject
	     { ... class definition ... };
	
	     // B.H
	     #ifdef B_IMPL
	         #define CLASS_DECL_B  _declspec(dllexport)
	     #else
	         #define CLASS_DECL_B  _declspec(dllimport)
	     #endif
	
	     class CLASS_DECL_B CExampleB : public CExampleA
	     { ... class definition .. };
	
	When A.DLL is built, it is built with /D A_IMPL, and when B.DLL is built, it is
	built with /D B_IMPL. By using separate symbols for each DLL, you ensure that
	CExampleB is exported and CExampleA is imported when building B.DLL. CExampleA
	is exported when building A.DLL and imported when used by B.DLL or some other
	client. This type of layering cannot be done when using the built-in
	AFX_EXT_CLASS and _AFXEXT pre-processor symbols. The technique described above
	solves this problem in a manner not unlike the mechanism MFC itself uses when
	building its OLE, Database, and Network extension DLLs.
	
	Not Exporting the Entire Class
	------------------------------
	
	Again you will have to take special care when you are not exporting an entire
	class. You have to ensure that the necessary data items created by the MFC
	macros are exported correctly. This can be done by re-defining AFX_DATA to your
	specific class' macro. This should be done any time you are not exporting the
	entire class.
	
	For example:
	
	     // A.H
	     #ifdef A_IMPL
	         #define CLASS_DECL_A  _declspec(dllexport)
	     #else
	         #define CLASS_DECL_A  _declspec(dllimport)
	     #endif
	
	     #undef  AFX_DATA
	     #define AFX_DATA CLASS_DECL_A
	
	     class CExampleA : public CObject
	     {
	
	       DECLARE_DYNAMIC()
	       CLASS_DECL_A int SomeFunction();
	       //... class definition ...
	
	     };
	
	     #undef AFX_DATA
	     #define AFX_DATA
	
	REFERENCES
	==========
	
	MFC TechNote #33.
	
	The DLLHUSK sample.
	
	The C++ Language Reference: Appendix B Microsoft-Specific Modifiers, under
	"Extended Storage-Class Attributes," under "Using dllimport and dllexport in
	C++."
	
	Additional query words: kbinf 2.00 2.10 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbDLL kbMFC kbVC200 kbVC400 kbhowto kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
