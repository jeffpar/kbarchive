---
layout: page
title: "Q248137: BUG: COleCurrency::operator/() Not Backward Compatible"
permalink: kb/248/Q248137/
---

## Q248137: BUG: COleCurrency::operator/() Not Backward Compatible

	Article: Q248137
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbMFC kbVC420 kbVC500 kbVC600bug kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application developed with Visual C++ 6.0 using MFC dynamically is
	installed on a computer, it may cause existing applications built with Visual
	C++ 4.2 or 5.0 that use MFC dynamically to stop working as expected.
	Specifically, calculations that are done using the COleCurrency::operator/()
	function may give incorrect results. It does not cause existing applications
	built with Visual C++ 4.2 or 5.0 that use the COleCurrency::operator/() function
	and MFC statically to behave differently.
	
	CAUSE
	=====
	
	This is a bug in the Visual C++ 6.0 MFC COleCurrency class. The Visual C++ 6.0
	MFC code for the COleCurrency::operator/() function does an incorrect
	calculation. This results in incorrect results after this function is called.
	
	RESOLUTION
	==========
	
	For any existing applications relying on the functionality of the
	COleCurrency::operator/() function that shipped in MFC42.DLL with Visual C++ 4.2
	or 5.0, you can copy the older Mfc42.dll into the application's directory. By
	doing so, the older Mfc42.dll is not used nor the newer one located in the
	windows system directory. If you are using Visual C++ 4.2 or 5.0 currently, you
	could link to MFC statically to prevent using any version of Mfc42.dll that may
	be on the target machines.
	
	For newer applications being developed with Visual C++ 6.0, the best solution is
	to not call COleCurrency::operator/(). You can work around the bug in Visual C++
	6.0 by writing a new class that subclasses COleCurrency. To do so, add a new
	header file to your project called MyOleCurrency.h and insert the following code
	into it:
	
	  #ifndef MYOLECURRENCY_H
	  #define MYOLECURRENCY_H
	
	  // Return the highest order bit composing dwTarget in wBit.
	  #define HI_BIT(dwTarget, wBit) do \ 
	  { \ 
	      if (dwTarget != 0) \ 
	          for (wBit = 32; (dwTarget & (0x00000001 << (wBit-1))) == 0; wBit--) \ 
	              ; \ 
	      else \ 
	          wBit = 0; \ 
	  } while (0)
	
	  // Left shift an (assumed unsigned) currency by wBits.
	  #define LSHIFT_UCUR(cur, wBits)     do \ 
	  { \ 
	      for (WORD wTempBits = wBits; wTempBits > 0; wTempBits--) \ 
	      { \ 
	          cur.m_cur.Hi = ((DWORD)cur.m_cur.Hi << 1); \ 
	          cur.m_cur.Hi |= (cur.m_cur.Lo & 0x80000000) >> 31; \ 
	          cur.m_cur.Lo = cur.m_cur.Lo << 1; \ 
	      } \ 
	  } while (0)
	
	  // Right shift an (assumed unsigned) currency by wBits.
	  #define RSHIFT_UCUR(cur, wBits)     do  \ 
	  { \ 
	      for (WORD wTempBits = wBits; wTempBits> 0; wTempBits--) \ 
	      { \ 
	          cur.m_cur.Lo = cur.m_cur.Lo >> 1; \ 
	          cur.m_cur.Lo |= (cur.m_cur.Hi & 0x00000001) << 31; \ 
	          cur.m_cur.Hi = ((DWORD)cur.m_cur.Hi >> 1); \ 
	      } \ 
	  } while (0)
	
	  #define DELETE_EXCEPTION(e) do { e->Delete(); } while (0)
	
	  class CMyOleCurrency : public COleCurrency
	  {
	  public:
	      const COleCurrency& operator=(CURRENCY cySrc)  
	      {  
	         m_cur = cySrc;  
	         SetStatus(valid); 
	         return *this; 
	      }
	
	      const COleCurrency& operator=(const COleCurrency& curSrc)  
	      { 
	         m_cur = curSrc.m_cur;  
	         m_status = curSrc.m_status;  
	         return *this; 
	      }
	
	      const COleCurrency& operator=(const VARIANT& varSrc)  
	      {
	         if (varSrc.vt != VT_CY)
	         {
	           TRY
	           {
	              COleVariant varTemp(varSrc);
	              varTemp.ChangeType(VT_CY);
	              m_cur = varTemp.cyVal;
	              SetStatus(valid);
	           }
	           // Catch COleException from ChangeType, but not CMemoryException
	           CATCH(COleException, e)
	           {
	              // Not able to convert VARIANT to CURRENCY
	              m_cur.Hi = 0;
	              m_cur.Lo = 0;
	              SetStatus(invalid);
	              DELETE_EXCEPTION(e);
	           }
	           END_CATCH
	         }
	         else
	         {
	            m_cur = varSrc.cyVal;
	            SetStatus(valid);
	         }
	
	         return *this;
	      }
	
	      COleCurrency CMyOleCurrency::operator/(long nOperand) const
	      {
	         // If operand not Valid, just return
	         if (!GetStatus() == valid)
	  	  return *this;
	
	         COleCurrency curTemp(m_cur);
	         DWORD nTempOp;
	
	         // Check for divide by 0b
	         if (nOperand == 0)
	         {
	  	  curTemp.SetStatus(invalid);
	
	            // Set to maximum negative value
	  	  curTemp.m_cur.Hi = 0x80000000;
	  	  curTemp.m_cur.Lo = 0x00000000;
	
	  	  return curTemp;
	         }
	
	         // Compute absolute values
	         if (curTemp.m_cur.Hi < 0)
	  	  curTemp = -curTemp;
	
	         nTempOp = labs(nOperand);
	
	         // Optimization - division is simple if Hi == 0
	         if (curTemp.m_cur.Hi == 0x0000)
	         {
	            //vc5 SP3 done this..., changed back to VC++ 5.0 SP3 behavior
	            curTemp.m_cur.Lo /= nTempOp;
	
	            //vc6 did this...
	            //curTemp.m_cur.Lo = m_cur.Lo / nTempOp;
	
	  	  // Compute result sign
	  	  if ((m_cur.Hi ^ nOperand) & 0x80000000)
	    	     curTemp = -curTemp;
	  	  return curTemp;
	         }
	
	         // Now curTemp represents remainder
	         COleCurrency curResult; // Initializes to zero
	         COleCurrency curTempResult;
	         COleCurrency curOperand;
	
	         curOperand.m_cur.Lo = nTempOp;
	
	         WORD wHiBitRem;
	         WORD wScaleOp;
	
	         // Quit if remainder can be truncated
	         while (curTemp >= curOperand)
	         {
	  	 // Scale up and divide Hi portion
	  	 HI_BIT(curTemp.m_cur.Hi, wHiBitRem);
	
	           if (wHiBitRem != 0)
	  	    wHiBitRem += 32;
	  	 else
	  	    HI_BIT(curTemp.m_cur.Lo, wHiBitRem);
	
	           WORD wShift = (WORD)(64 - wHiBitRem);
	  	 LSHIFT_UCUR(curTemp, wShift);
	
	           // If Operand bigger than Hi it must be scaled
	  	 wScaleOp = (WORD)((nTempOp > (DWORD)curTemp.m_cur.Hi) ? 1 : 0);
	
	           // Perform synthetic division
	  	 curTempResult.m_cur.Hi = (DWORD)curTemp.m_cur.Hi / (nTempOp >> wScaleOp);
	
	           // Scale back to get correct result and remainder
	  	 RSHIFT_UCUR(curTemp, wShift);
	  	 wShift = (WORD)(wShift - wScaleOp);
	  	 RSHIFT_UCUR(curTempResult, wShift);
	
	           // Now calculate result and remainder
	  	 curResult += curTempResult;
	  	 curTemp -= curTempResult * nTempOp;
	         }
	
	         // Compute result sign
	         if ((m_cur.Hi ^ nOperand) & 0x80000000)
	  	  curResult = -curResult;
	
	         return curResult;
	      }
	  };
	
	  #endif MYOLECURRENCY_H
	
	Instead of using COleCurrency in your code, use CMyOleCurrency instead. Also, be
	sure to use #include "MyOleCurrency.h" after #include "stdafx.h" before using
	the CMyOleCurrency class in any source files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Visual C++ 6.0, create a new Win32 Console Application with AppWizard.
	  Type TestCurr in the Project name edit box. Click the OK button.
	
	2. In the next dialog box, click the radio button An application that supports
	  MFC. Click Finish. Click OK in the New Project Information dialog box.
	
	3. Open the TestCurr.cpp file and add the following code below before the return
	  statement in _tmain:
	
	   COleCurrency a;
	
	   a.SetCurrency (4,500);
	   a *= -100;
	   a=a/100;
	
	   cout << "Hi    = " << a.m_cur.Hi << endl;
	   cout << "Lo    = " << a.m_cur.Lo << endl;
	   cout << "int64 = " << (INT)a.m_cur.int64 << endl;
	
	4. The code for _tmain() should look something like the following after doing
	  the last step:
	
	  int _tmain(int argc, TCHAR* argv[], TCHAR* envp[])
	  {
	      int nRetCode = 0;
	
	      // initialize MFC and print and error on failure
	      if (!AfxWinInit(::GetModuleHandle(NULL), NULL, ::GetCommandLine(), 0))
	      {
	         // TODO: change error code to suit your needs
	         cerr << _T("Fatal Error: MFC initialization failed") << endl;
	         nRetCode = 1;
	      }
	      else
	      {
	         // TODO: code your application's behavior here.
	         CString strHello;
	         strHello.LoadString(IDS_HELLO);
	         cout << (LPCTSTR)strHello << endl;
	      }
	
	      COleCurrency curr;
	      curr.SetCurrency (4,500);
	      curr *= -100;
	      curr = curr/100;
	
	      cout << "Hi    = " << curr.m_cur.Hi << endl;
	      cout << "Lo    = " << curr.m_cur.Lo << endl;
	      cout << "int64 = " << (INT)curr.m_cur.int64 << endl;
	
	      return nRetCode;
	  }
	
	5. Build the project and execute it.
	
	You should see the following in the output window for the results of the
	calculations:
	
	  Hi    = -1
	  Lo    = 4252058124
	  Int64 = -42909172
	
	If the same code was compiled using Visual C++ 4.2 or 5.0, you get the following
	results instead:
	
	  Hi    = -1
	  Lo    = 4294926796
	  int64 = -40500
	
	Additional query words: backward compatible port incompatible wrong results answer MFC42.DLL
	
	======================================================================
	Keywords          : kbAutomation kbMFC kbVC420 kbVC500 kbVC600bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
