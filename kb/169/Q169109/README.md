---
layout: page
title: "Q169109: PRB: Parse Maps Do Not Handle Multi-select List Boxes"
permalink: kb/169/Q169109/
---

## Q169109: PRB: Parse Maps Do Not Handle Multi-select List Boxes

	Article: Q169109
	Product(s): Microsoft C Compiler
	Version(s): 4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbnokeyword kbISAPI kbMFC kbVC
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.1, 4.2, 5.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC ISAPI extension cannot handle a multiple-select list box on a form. The
	following error message may appear in Internet Explorer 3.0 when multiple items
	are selected:
	
	  BAD REQUEST
	
	Your client sent a request that this server didn't understand.
	
	CAUSE
	=====
	
	MFC ISAPI parse maps are not designed to handle multiple-select list boxes.
	
	RESOLUTION
	==========
	
	One way of handling multiple selections is to override CallFunction and do the
	all the parsing in CallFunction without calling the base class. This involves
	writing the code for parsing the input from the browser.
	
	Another method involves modifying the input to a format that can be handled by
	the parse maps. The sample code in the MORE INFORMATION section of this article
	overrides CallFunction and modifies the input in a way that the parse maps can
	handle.
	
	MORE INFORMATION
	================
	
	If you select multiple items in the list box, the following is sent when you use
	the HTML in the Sample Code section:
	
	     MFCIsapiCommand=WorksOn&Name=ssm&Days=Monday&Days=Tuesday
	
	The code in CallFunction below modifies the input as follows:
	
	     MFCIsapiCommand=WorksOn&Name=ssm&Days=Monday,Tuesday
	
	In the parse map function, the variable associated with the list box contains a
	string with all the selected items in the list box, delimited by ','. If a comma
	is not a good delimiter then change the line:
	
	     #define DELIMITER  ','
	
	and specify a different character. Note that &, ?, =, + have special meanings
	and should not be used as delimiters.
	
	Sample Code
	-----------
	
	HTML Form that calls the sample dll:
	
	     <HTML>
	
	     <form action="/scripts/MyIsapi.dll?" method="Post">
	     <input type=hidden Name=MFCIsapiCommand Value=WorksOn>
	     Name <input name="Name" >
	     <p>
	     Works on
	     <SELECT MULTIPLE NAME="Days">
	     <OPTION VALUE="">NONE
	     <OPTION>Sunday
	     <OPTION>Monday
	     <OPTION>Tuesday
	     <OPTION>Wednesday
	     <OPTION>Thursday
	     <OPTION>Friday
	     <OPTION>Saturday
	     </SELECT>
	     <p>
	     <input type=submit>
	     </form>
	
	     </HTML>
	
	MFC ISAPI PARSE_MAP entries and function for the above:
	
	     ON_PARSE_COMMAND(WorksOn, CMyIsapiExtension, ITS_PSTR ITS_PSTR)
	     ON_PARSE_COMMAND_PARAMS("Name=~ Days=~")
	
	     void CFirstISAPIExtension::WorksOn (CHttpServerContext* pCtxt,
	         LPCTSTR Name, LPTSTR Days)
	     {
	         StartContent(pCtxt);
	         *pCtxt << Name << " works on the following Days : <p>" << Days;
	         EndContent(pCtxt);
	
	     }
	
	The code above generates the error message when more than one day is selected in
	the list box.
	
	The following override of CallFunction modifies the input so that the parse maps
	can handle multiple selections:
	
	     #define DELIMITER ","
	
	     int CMyIsapiExtension::CallFunction(CHttpServerContext* pCtxt,
	         LPTSTR pszQuery, LPTSTR pszCommand)
	     {
	         LPTSTR queryIn = pszQuery;
	         LPTSTR queryOut = new TCHAR[_tcslen(queryIn) + sizeof(TCHAR)];
	         LPTSTR pOut = queryOut;
	         *pOut = NULL;
	
	         LPTSTR pIn = queryIn;
	         // Copy everything till the first ?
	         if (_tcschr(pIn, '?'))
	         {
	             pIn = _tcschr(pIn, '?');
	             pIn++;
	             memcpy(pOut, queryIn, (pIn - queryIn)); //copy till the ?
	             pOut += (pIn - queryIn);
	             *pOut = NULL;
	         }
	
	         LPTSTR lastParameter = NULL;
	         int nLastParameterLen = 0;
	
	         while (pIn && *pIn)
	         {
	             // Is there a '=' in the input string
	             LPTSTR q = _tcschr(pIn, '=');
	             if (!q)
	             {
	                 // No. Copy till end of the buffer and break out
	                 // No more parameter/value pairs.
	                 _tcscpy(pOut, pIn);
	                 break;
	             }
	
	             int paramLen = (q - pIn);
	
	             // Is the last parameter name the same as the present
	             // parameter name?
	             if (paramLen &&
	                 nLastParameterLen == paramLen &&
	                 _tcsncmp(lastParameter, pIn, nLastParameterLen) == 0)
	             {
	                 // Yes! replace & with , and just copy the value
	                 // of the parameter.
	                 q++;
	                 if (*q)
	                 {
	                     LPTSTR r = _tcschr(q, '&');
	                     *(pOut - 1) = ',';
	                     //copy the value
	                     if (r)
	                     {
	                         _tcsncpy(pOut, q, (r - q) + 1);
	                         pOut+=(r - q) + 1;
	                         pIn = r + 1;
	                     }
	                     else
	                     {
	                         _tcscpy(pOut, q);
	                         break;
	                     }
	                 }
	                 else
	                 {
	                     *(pOut - 1) = ',';
	                     *pOut = NULL;
	                     break;
	                 }
	             }
	             else
	             {
	                 nLastParameterLen = paramLen;
	                 lastParameter = pIn;
	
	                 q = _tcschr(pIn, '&');
	                 if (q)
	                 {
	                     if (paramLen)
	                     {
	                         _tcsncpy(pOut, pIn, (q - pIn) + 1);
	                         pOut += (q - pIn) + 1;
	                     }
	                     pIn = q + 1;
	                 }
	                 else
	                 {
	                     if (paramLen)
	                     {
	                         _tcscpy(pOut, pIn);
	                         break;
	                     }
	                     else
	                     {
	                         if (pOut == queryOut)
	                             *pOut = NULL;
	                         else
	                             *(pOut - 1) = NULL;
	                         break;
	                     }
	                 }
	             }
	         }
	
	         pszQuery = queryOut;
	
	         int nRet = CHttpServer::CallFunction(pCtxt,
	             pszQuery, pszCommand);
	
	         delete []queryOut;
	
	         return nRet;
	     }
	
	The following modification to the WorksOn function prints the days on different
	lines:
	
	     void CMyIsapiExtension::WorksOn (CHttpServerContext* pCtxt,
	         LPCTSTR Name, LPTSTR Days)
	     {
	         StartContent(pCtxt);
	         *pCtxt << Name << " works on the following Days<p>";
	         LPTSTR p = (LPTSTR)Days;
	         while (p)
	         {
	             LPCTSTR q = p;
	             p = _tcschr(p, ',');
	             if (p)
	                 *p++ = NULL;
	
	             *pCtxt << q << "<p>";
	         }
	
	         EndContent(pCtxt);
	
	     }
	
	Additional query words: multiple select listbox list box mfcisapi form
	
	======================================================================
	Keywords          : kbcode kbProgramming kbnokeyword kbISAPI kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.1,4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	
