---
layout: page
title: "Q288121: BUG: Posting Acceptor Causes ASP Session to Be Lost"
permalink: /kb/288/Q288121/
---

## Q288121: BUG: Posting Acceptor Causes ASP Session to Be Lost

{% raw %}

	Article: Q288121
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbASP kbInternet kbDSupport kbIIS kbGrpDSMSXML
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Posting Acceptor is used to upload files to Internet Information
	Server (IIS), Session state is lost.
	
	CAUSE
	=====
	
	Posting Acceptor is causing the Session cookie to be omitted when the
	cpshost.dll that is responsible for handling the file upload posts data to the
	repost URL. As a result, IIS sees the request as from a first-time caller and
	assigns it a new Session ID.
	
	RESOLUTION
	==========
	
	Workarounds
	-----------
	
	There are two possible workarounds for this problem:
	
	- Do not use session data or write all Session variables to Form variables on
	  the page calling the Posting Acceptor and then rewrite them from the Repost
	  page. In this event, the original session still uses memory on the server and
	  eventually times out. This solution is not very robust or clean, and
	  Microsoft does not recommended it.
	
	- A more robust workaround is to include a hidden form variable in the form
	  that is used to upload the file that contains the user's ASP Session cookie.
	  Then, in the onload event for the repost page, the cookie must be set again.
	  While some browsers may be able to retrieve the correct Session cookie
	  without this step, others never recover the session without it.
	
	Note that Session data is not available in the server-side code for the repost
	URL because the cookie does not yet exist at that time. If Session data is
	needed on the Repost page, the page can redirect to another page immediately
	upon loading. However, until this bug is fixed in Posting Acceptor, the
	server-side code on the Repost page is not able to access Session data.
	
	The following sample demonstrates the second workaround described previously.
	Keep in mind that Posting Acceptor needs to be installed on the server for the
	sample to work. Also, the proper permissions must be set on the directory
	referenced by the TargetURL form variable in the code in order for the upload to
	succeed.
	
	For more information, see the articles listed in the "References" section of this
	article.
	
	1. Paste the following code into a new ASP page, and save the page as
	  UploadFile.asp in a directory that is accessible from your Web site. This
	  directory should allow write access for the IUSR (or IWAM, if run
	  out-of-process) account on the Web server, both with NT file system and
	  Microsoft Internet Information Server (IIS) permissions:
	
	  <%@ Language=VBScript%>
	  <%
	  ' Get the repost path for the page, because you have to have the fully qualified path for the upload to succeed.
	  Dim strRepostPath
	  strRepostPath = "http://" + Request.ServerVariables("SERVER_NAME") + Request.ServerVariables("URL")
	  strRepostPath = Left(strRepostPath, InStrRev(strRepostPath, "/"))
	  %>
	  <html>
	  <body>
	  	<b>Session ID:</b> <%=Session.SessionID%><br>
	  	<br>
	  	<form action="/scripts/cpshost.dll?PUBLISH?<%=strRepostPath%>RepostPage.asp" method="post" enctype="multipart/form-data">
	  		<input type="hidden" name="TargetURL" value="<%=strRepostPath%>">
	  		<input type="hidden" name="SessionCookie">
	  		<input type="hidden" name="SessionID" value="<%=Session.SessionID%>">
	  		<b>File to upload:</b> <input type="file" name="UploadFile"><br>
	  		<br>
	  		<input type="button" value="Submit" onclick="Submit();">		
	  	</form>
	  </body>
	  </html>
	  <script language="javascript">
	  	function Submit()
	  	{
	  		// Find the ASP Session cookie and store it in the SessionCookie form variable.
	  		var sSC = new String(document.cookie);
	  		var iStartPos = sSC.indexOf("ASPSESSIONID");
	  		var iEndPos = sSC.indexOf(";", iStartPos);
	  		
	  		if (iEndPos == -1) iEndPos = sSC.length;
	  		sSC = sSC.substr(iStartPos, iEndPos - iStartPos);
	  		document.forms[0].SessionCookie.value = sSC;
	  		
	  		// And submit the form...
	  		document.forms[0].submit();
	  	}
	  </script>
	
	2. Paste the following code into another new file, and save the file with the
	  name RepostPage.asp in the same location as the previous file:
	
	  <%@ Language=VBScript %>
	  <%
	  ' Get the repost path for the page, because you have to have the fully qualified path for the redirection to succeed.
	  ' This is because this page erroneously believes it is in the /Scripts virtual root
	  ' of the site that was called by the cpshost.dll file in that directory.
	  Dim strRepostPath
	  strRepostPath = "http://" + Request.ServerVariables("SERVER_NAME") + Request.ServerVariables("URL")
	  strRepostPath = Left(strRepostPath, InStrRev(strRepostPath, "/"))
	  %>
	  <html>
	  <body onload="FixBrokenSession();">
	  	<b>Session ID should be (and was):</b> <%=Request.Form("SessionID")%><br>
	  	<b>New (incorrect) session ID after post:</b> <%=Session.SessionID%><br>
	  </body>
	  </html>
	
	  <script language="JavaScript">
	  	function FixBrokenSession()
	  	{
	  		document.cookie = "<%=Request.Form("SessionCookie")%>;path=/";
	  		alert("Session has been restored!");
	  		alert("Now redirect to demonstrate fixed Session ID...");
	  		document.location.href = "<%=strRepostPath%>SessionIsFixed.asp";
	  	}
	  </script>
	
	  <%
	  ' Abandon this false session so that the server releases it immediately.
	  Session.Abandon
	  %>
	
	3. Paste the following code into a third new file, and save the file as
	  SessionIsFixed.asp in the same location as the previous two files:
	
	  <%@ Language=VBScript %>
	  <html>
	  <body>
	  	<b>Fixed, original Session ID:</b> <%=Session.SessionID%><br>
	  </body>
	  </html>
	
	4. Finally, browse to the UploadFile.asp in your Internet browser, and upload a
	  file. Note that you see the session lost and restored again. Remember that
	  some browsers (Internet Explorer (IE), specifically) are capable of restoring
	  the Session cookie simply by redirecting the URL. However, other browsers may
	  not be able to do this, and lose the state of the Session unless the Session
	  cookie is manually fixed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this problem, use the preceding sample code but remove the
	FixBrokenSession() function call from the onload event of the <body> tag.
	The session is then lost.
	
	REFERENCES
	==========
	
	For additional information about Posting Acceptor, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q184352 HOWTO: Upload Files to the Internet Information Server
	
	  Q217425 A Simple ASP Example Using Posting Acceptor
	
	  Q230298 Posting Acceptor Release Notes
	
	  Q241184 Posting Acceptor Returns Server Error 500 When Invalid File Name Is
	  Used
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbInternet kbDSupport kbIIS kbGrpDSMSXML 
	Technology        : kbiisSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
