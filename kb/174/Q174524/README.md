---
layout: page
title: "Q174524: HOWTO: Retrieve and Insert HTML Into Memo Field"
permalink: /kb/174/Q174524/
---

## Q174524: HOWTO: Retrieve and Insert HTML Into Memo Field

{% raw %}

	Article: Q174524
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600 kbInetDev
	Last Modified: 21-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample program below will connect to an Internet or intranet Web page and
	bring back the HTML code and store it into a memo field of a FoxPro table.
	
	MORE INFORMATION
	================
	
	Save the sample program below into a Visual FoxPro program file. Use the
	following syntax to run the program:
	
	  
	
	     DO readurl.prg WITH "http://www.microsoft.com"
	
	Any Internet or intranet URL can be passed as a parameter. Microsoft.com was
	chosen for this example.
	
	Note that Microsoft Internet Explorer must be installed on the computer.
	
	  
	
	     * READURL.PRG - return the HTML for a specified URL in HURL.MEMO
	     *
	     * passed: URLName, in the form "http://www.microsoft.com"
	     *
	     * returns: length of HTML file
	     *
	     * usage:
	     *
	     *      m.urllength = readurl("http://www.microsoft.com")
	     *
	     *
	     * notes:
	     * 1 - IE does not need to be running to use this, but must be installed,
	     * as the program uses an option that gets information from the registry
	     *
	     * 2 - the URL name apparently MUST be passed in the form shown above.
	     *
	
	     PARAMETERS UrlName
	
	     DECLARE INTEGER InternetOpen IN wininet.DLL STRING sAgent, ;
	           INTEGER lAccessType, STRING sProxyName, ;
	           STRING sProxyBypass, INTEGER lFlags
	
	     DECLARE INTEGER InternetOpenUrl IN wininet.DLL ;
	        INTEGER hInternetSession, STRING sUrl, STRING sHeaders, ;
	        INTEGER lHeadersLength, INTEGER lFlags, INTEGER lContext
	
	     DECLARE INTEGER InternetReadFile IN wininet.DLL INTEGER hfile, ;
	           STRING @sBuffer, INTEGER lNumberofBytesToRead, INTEGER @lBytesRead
	
	     DECLARE short InternetCloseHandle IN wininet.DLL INTEGER hInst
	
	     #DEFINE INTERNET_OPEN_TYPE_PRECONFIG 0
	     #DEFINE INTERNET_OPEN_TYPE_DIRECT 1
	     #DEFINE INTERNET_OPEN_TYPE_PROXY 3
	     #DEFINE SYNCHRONOUS 0
	     #DEFINE INTERNET_FLAG_RELOAD 2147483648
	     #DEFINE CR CHR(13)
	
	     IF NOT FILE("hurl.dbf")
	           CREATE TABLE hurl (MEMO M)
	     ELSE
	           USE hurl
	     ENDIF
	     APPEND BLANK
	
	     * what application is using Internet services?
	     sAgent = "VPF 5.0"
	
	     hInternetSession = InternetOpen(sAgent, INTERNET_OPEN_TYPE_PRECONFIG, ;
	           '', '', SYNCHRONOUS)
	
	     * debugging line - uncomment to see session handle
	     * WAIT WINDOW "Internet session handle: " + LTRIM(STR(hInternetSession))
	
	     IF hInternetSession = 0
	           WAIT WINDOW "Internet session cannot be established" TIME 2
	           RETURN 0
	     ENDIF
	
	     hUrlFile = InternetOpenUrl(hInternetSession, UrlName, '', ;
	           0, INTERNET_FLAG_RELOAD, 0)
	
	     * debugging line - uncomment to see URL handle
	     * WAIT WINDOW "URL Handle: " + LTRIM(STR(hUrlFile))
	
	     IF hUrlFile = 0
	           WAIT WINDOW "URL cannot be opened"
	           RETURN 0
	     ENDIF
	
	     DO WHILE .T.
	           * set aside a big buffer
	           sReadBuffer = SPACE(32767)
	           lBytesRead = 0
	           m.OK = InternetReadFile(hUrlFile, @sReadBuffer, ;
	              LEN(sReadBuffer), @lBytesRead)
	
	           * debugging code - uncomment if necessary
	           *WAIT WINDOW "hURLFile: " + LTRIM(STR(hURLFile)) + CR + ;
	           *                  "lBytesRead: " + LTRIM(STR(lBytesRead)) + CR ;
	           *                  + "m.OK      : " + LTRIM(STR(m.OK))
	
	           REPLACE hurl.MEMO WITH sReadBuffer ADDITIVE
	
	           * uncomment to watch the changes to the memo file
	           * MODIFY MEMO hurl.memo
	
	           * error trap - either a read failure or read past eof()
	           IF m.OK = 0 OR lBytesRead = 0
	              EXIT
	           ENDIF
	     ENDDO
	
	     * close all the handles we opened
	     =InternetCloseHandle(hUrlFile)
	     =InternetCloseHandle(hInternetSession)
	
	     * return the number of bytes read
	     RETURN LEN(hurl.memo)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 kbInetDev 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
