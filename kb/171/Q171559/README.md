---
layout: page
title: "Q171559: Inside COM Comments and Corrections"
permalink: /kb/171/Q171559/
---

## Q171559: Inside COM Comments and Corrections

	Article: Q171559
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 06-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Com ISBN 1-57231-349-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book "Inside COM," ISBN 1-57231-349-8.
	
	The following topics are covered:
	
	- Page 19: Text Correction
	
	- Page 21: Sidebar Update
	
	- Pages 30-33: vtbl Pointers & Instance Data Corrections
	
	- Page 53: Typo In Code
	
	- Pages 77-80: (SUCCEEDED)hr)) Should Be (SUCCEEDED(hr))
	
	- Page 80: Incorrect Code
	
	- Page 87: Typo In Last Paragraph
	
	- Page 92/Figure 5-2: Correction
	
	- Page 99: Incorrect Table Heading
	
	- Page 104: HRESULT Has 3 Fields
	
	- Page 107: Typographical Error
	
	- Page 111: Code Sample Change
	
	- Pages 122 & 170: Miscellaneous Corrections
	
	- Page 149: Code Change
	
	- Page 150: Incorrect Code
	
	- Page 166: Error In Code Sample
	
	- Page 178: Code Error
	
	- Pages 178, 217, 219: Miscellaneous Corrections
	
	- Pages 178 & 290: Code Errors
	
	- Page 185: Error In Code Sample
	
	- Page 221: Code Correction
	
	- Pages 257, 261, 280, 307: Miscellaneous Corrections
	
	- Page 284: Missing Methods In Figure 11-2
	
	- Page 285: Text Incorrect
	
	- Page 340: Incorrect Statement Concerning Components
	
	- Miscellaneous Typos: Pages 53, 78, 217, 218, 297, 331
	
	MORE INFORMATION
	================
	
	Page 19: Text Correction
	------------------------
	
	Correction for page 19, paragraph 2.
	
	Change:
	"Inheriting from a pure abstract base class is called interface inheritance..."
	
	To:
	"Inheriting publicly from a pure abstract base class is called interface
	inheritance..."
	
	
	Page 21: Sidebar Update
	-----------------------
	
	Replace sidebar text as follows:
	
	[Start replacement]
	
	The __stdcall or Pascal Calling Convention
	
	You might have noticed the word __stdcall above. __stdcall is a
	Microsoft-specific extension to the compiler. (You knew there had to be one.)
	Any compiler that supports the development of Win32 applications will have this
	or an equivalent option. Compilers from Borland, Symantec, and Watcom have this
	option. A function marked with __stdcall uses the standard calling convention.
	Functions using the standard calling convention remove the parameters from the
	stack before they return to the caller. Pascal functions handle stack clean up
	the same way. In the normal C/C++ calling convention, the caller cleans up the
	stack instead of the function. Most other languages, such as Visual Basic, use
	the standard calling convention by default. The standard calling convention is
	so named because all Win32 API functions, except the few that take variable
	arguments, use it. Variable argument functions continue to use the C calling
	convention, or __cdecl. Windows adopted the standard calling convention because
	it reduces the size of code and because the original versions of Windows had to
	run on 640-KB systems.
	
	Virtually all functions offered by COM interfaces on Microsoft platforms use the
	standard calling convention. Functions with variable numbers of arguments use
	the C calling convention. People will expect you to use those conventions.
	However, using them is not an absolute requirement of COM. You may use another
	calling convention, but you should definitely document that fact, and you should
	be aware that clients written in some other languages might not be able to use
	your interfaces.
	
	If you prefer a word that is easier to remember than __stdcall, use pascal. It is
	defined in WINDEF.H as
	
	    #define pascal __stdcall
	
	Or if you think putting the word pascal in your code makes you a wimp, you can
	use the following definition from OBJBASE.H:
	
	    #define STDMETHODCALLTYPE __stdcall
	
	[End text replacement]
	
	Note that the footnote remains the same in both the original and updated versions
	of this sidebar.
	
	
	Pages 30-33: vtbl Pointers & Instance Data Corrections
	------------------------------------------------------
	
	The following corrections are needed to improve the clarity and accuracy of the
	section describing vtbl pointers and instance data:
	
	Page 30, code fragment changes:
	
	  - Line 7, change:
	  "{cout << m_Fx2 << end1 ;}"
	
	  To:
	  "{cout << m_data1 << end1 ;}"
	
	  - Line 8, change:
	  "{cout << m_Fx3 << end1 ;}"
	
	  To:
	  "{cout << m_data2 << end1 ;}"
	
	  - Line 9, change:
	  "{cout << m_Fx4 << end1 ;}"
	
	  To: "{cout << m_data3 << end1 ;}"
	
	  - Line 13, change:
	  ": m_Fx2(d*d), m_Fx3(d*d*d), m_Fx4(d*d*d*d)"
	
	  To:
	  ": m_data1(d*d), m_data2(d*d*d), m_data3(d*d*d*d)"
	
	Page 31, top code fragment changes:
	
	  - Line 2, change:
	  "double m_Fx2 ;"
	
	  To:
	  "double m_data1 ;"
	
	  - Line 3, change:
	  "double m_Fx3 ;"
	
	  To:
	  "double m_data2 ;"
	
	  - Line 4, change:
	  "double m_Fx4 ;"
	
	  To:
	  "double m_data3 ;"
	
	Page 31, figure 2-5:
	
	  - Remove the bottom three arrows between the vtbl pointer box to the Virtual
	  Function Table box. (Be sure to leave the top pointer from vtbl pointer to
	  &Fx1)
	  - In the vtbl pointer box:
	  Change "&m_Fx2" to "m_data1"
	  Change "&m_Fx3" to "m_data2"
	  Change "&m_Fx4" to "m_data3"
	
	Page 32, figure 2-6:
	
	  - In both upper and lower vtbl pointer boxes:
	  Change "&m_Fx2" to "m_data1"
	  Change "&m_Fx3" to "m_data2"
	  Change "&m_Fx4" to "m_data3"
	
	Page 33, paragraph 1, sentence 3:
	
	  Change:
	  "I drew the instance data as a dotted box since, "
	  To:
	  "I didn't draw the instance data since, "
	
	Page 33, figure 2-7:
	
	  - Remove the bottom three arrows between the top vtbl pointer box to the
	  Virtual Function Table box. (Be sure to leave the top pointer from vtbl
	  pointer to &Fx1)
	  - Remove the bottom three arrows between the bottom vtbl pointer box to the
	  Virtual Function Table box. (Be sure to leave the top pointer from vtbl
	  pointer to &Fx1)
	  - Remove both the upper and lower empty regions below each vtbl pointer box.
	  Each vtbl pointer should look similar to figure 2-4 on page 29.
	
	
	Page 53: Typo In Code
	---------------------
	
	Correction for page 53, function SameComponents code, line 4.
	
	Change:
	
	        IUnknown pI1 = NULL;<BR/>
	        IUnknown pI2 = NULL;<BR/>
	
	To:
	
	         IUnknown* pI1 = NULL;<BR/>
	         IUnknown* pI2 = NULL;<BR/>
	
	
	Pages 77-80: (SUCCEEDED)hr)) Should Be (SUCCEEDED(hr))
	------------------------------------------------------
	
	Corrections for page 77, 79, 80, in code samples.
	
	Change:
	
	        if (SUCCEEDED)hr))
	
	To:
	
	        if (SUCCEEDED(hr))
	
	
	Page 80: Incorrect Code
	-----------------------
	
	On page 80, change the first line on the page to "void foo (IX* pIX2)".
	
	
	Page 87: Typo In Last Paragraph
	-------------------------------
	
	On page 87, change:
	"I've lost a lot of hair because I forgot to export the filename."
	
	To:
	"I've lost a lot of hair because I forgot to export the function name."
	
	
	Page 92/Figure 5-2: Correction
	------------------------------
	
	Correction for page 92, figure 5-2.
	
	Change: GUIDS.CCP
	To: GUIDS.CPP
	
	
	Page 99: Incorrect Table Heading
	--------------------------------
	
	On Page 99, in Table 5-1, change the heading for the third column from "IX" to
	"IZ".
	
	
	Page 104: HRESULT Has 3 Fields
	------------------------------
	
	Correction for page 104, paragraph 4, sentence 6.
	
	Change:
	"An HRESULT is a 32-bit value divided into four different fields."
	To:
	"An HRESULT is a 32-bit value divided into three different fields."
	
	
	Page 107: Typographical Error
	-----------------------------
	
	Correction for page 107, paragraph 1, sentence 1.
	
	Change:
	"...with the order HRESULTS."
	
	To:
	"...with the other HRESULTS."
	
	
	Page 111: Code Sample Change
	----------------------------
	
	On page 111, in code sample 1, change code sample to read as follows:
	
	   MAKE_HRESULT(SEVERITY_ERROR, FACILITY_ITF, 512);<BR/>
	   MAKE_HRESULT(SEVERITY_SUCCESS, FACILITY_ITF, 513);<BR/>
	
	
	Pages 122 & 170: Miscellaneous Corrections
	------------------------------------------
	
	Correction for page 122, Figure 6-5.
	
	Change value of the CurVer key from:
	"Helicopter.TailRotor"
	To:
	"Helicopter.TailRotor.1"
	
	Page 170, first code sample:
	
	Change line 14 from:
	IUnknown* m_pInnerUnknown
	To:
	IUnknown* m_pUnknownInner
	
	
	Page 149: Code Change
	---------------------
	
	Correction for page 149, code line 37.
	
	Change:
	CFactory* pFactory = new CFactory ; // No AddRef in constructor
	
	To:
	CFactory* pFactory = new CFactory ; // Reference count set to 1 in
	
	                                           // constructor
	
	
	Page 150: Incorrect Code
	------------------------
	
	Please change the second to last line of the code in CMPNT.CPP from:
	g_hmodule = hmodule
	
	To:
	void* g_hmodule = hmodule
	
	
	Page 166: Error In Code Sample
	------------------------------
	
	The line of code displayed at the bottom of page 166 does not match code sample
	8-1 on page 164.
	
	Change:
	
	  virtual void Fy() { m_pIY->Fy() ;}
	
	To:
	
	  virtual void __stdcall Fy() { m_pIY->Fy() ;}
	
	
	Page 178: Code error
	--------------------
	
	Correction for page 178, sample code.
	
	Change:
	IUnknown* pOuterUnknown = this;
	
	To:
	IUnknown* pUnknownOuter = this;
	
	
	Pages 178, 217, 219: Miscellaneous corrections
	----------------------------------------------
	
	Corrections for page 178, paragraph 3, sentence 1.
	
	Change:
	"Notice also that the fourth parameter..."
	To:
	"Notice also that the fifth parameter..."
	
	Page 217, code fragment, line 4:
	
	Change:
	"CLSID_COMPONENT1"
	To: "CLSID_Component1"
	
	Page 219, code sample 2, line 4:
	
	Change:
	"spIX = pIX ;"
	To:
	"spIX = pIX1 ;"
	
	
	Pages 178 & 290: Code Errors
	----------------------------
	
	On page 178, code line 9 should read:
	
	  if (FAILED(hr))
	
	On page 290, code line 1 should read:
	
	  typedef struct tagVARIANT {
	
	
	Page 185: Error In Code Sample
	------------------------------
	
	Change:
	
	  CA::CA()
	  : m_cRef(1),
	    m_pUnknownInner(NULL)
	
	To:
	
	  CA::CA()
	  : m_cRef(1),
	    m_pUnknownInner(NULL),
	    m_pIY(NULL)
	
	
	Page 221: Code Correction
	-------------------------
	
	Correction for page 221, in 10th line of code.
	
	Change:
	
	   IY *pIY = interface_cast<IX, &IID_IX>(this);
	
	To:
	
	   IY *pIY = interface_cast<IY, &IID_IY>(this);
	
	
	Pages 257, 261, 280, 307: Miscellaneous Corrections
	---------------------------------------------------
	
	Correction for page 257, in paragraph 3, sentence 2.
	
	Change:
	"...in the first parameter, psizeOut."
	To:
	"...in the first parameter, psizeInOut."
	
	On page 257, in paragraph 3, sentence 4, change:
	"It then sets psizeOut..."
	To:
	"It then sets psizeInOut..."
	
	On page 261, in paragraph 2, delete the last sentence.
	
	On page 280, in paragraph 6, sentence 4, change:
	"...contains the interface pointer it wants to call?"
	To:
	"...contains the function pointer it wants to call?"
	
	On page 307, in item 5, change:
	"...passing it your ICreateErrorInfo interface pointer..."
	To:
	"...passing it your IErrorInfo interface pointer..."
	
	
	Page 284: Missing Methods In Figure 11-2
	----------------------------------------
	
	On page 284, in Figure 11-2, the "FooBar Interface" box should have the following
	additional methods in it:
	
	  &QueryInterface
	  &AddRef
	  &Release
	
	
	Page 285: Text Incorrect
	------------------------
	
	Correction for page 285, in paragraph 4.
	
	Change:
	"when something sounds to good to be true"
	
	To:
	"when something sounds too good to be true"
	
	
	Page 340: Incorrect Statement Concerning Components
	---------------------------------------------------
	
	Page 340 contains an incorrect statement.
	
	Change:
	"All components provided by an in-proc server must have the same threading
	model."
	
	To:
	"Components provided by an in-proc server can have different threading models."
	
	
	Miscellaneous Typos: Pages 53, 78, 217, 218, 297, 331
	-----------------------------------------------------
	
	Corrections for page 53, code fragment 2, line 6.
	
	Change "QueryInteface" to "QueryInterface".
	The new line should read:
	
	  HRESULT hr = pIX -> QueryInterface(IID_IX, (void**)&pIX2) ;
	
	Corrections for page 78, paragraph 2, sentence 3:
	Change:
	"If the life of pIX2 were not contained in the life of pIX1..."
	To:
	"If the life of pIX2 were not contained in the life of pIX..."
	
	Corrections for page 217, code fragment:
	spIX.iid() should have comma after it. The code should read as follows:
	
	      HRESULT HR = ::CoCreateInstance(CLSID_Component1,
	                                      NULL,
	                                      CLSCTX_ALL,
	                                      spIX.iid(),
	                                      (void**)&spIX) ;
	
	Corrections for page 218, code fragment 1:
	There is a missing parenthesis. The code should read as follows:
	
	      return CoCreateInstance(clsid, pI, clsctx, *piid, (void**)&m_pI) ;
	
	Corrections for page 218, code fragment 2:
	There is a missing comma and parenthesis. The code should read:
	
	      HRESULT hr = spIX.CreateInstance(CLSID_Component1,
	                                       NULL,
	                                       CLSCTX_INPROC_SERVER) ;
	
	Corrections for page 297, paragraph 1, sentence 1:
	Change:
	"A method in a dispinterface can also can have..."
	To:
	"A method in a dispinterface can also have..."
	
	Corrections for page 331, paragraph 1, sentence 1:
	Change:
	"...queries the component it creates for a its IX interface..."
	To:
	"...queries the component it creates for its IX interface..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug com automation devbook
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
