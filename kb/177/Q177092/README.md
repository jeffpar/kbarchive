---
layout: page
title: "Q177092: FP: Overview of FrontPage Discussion Web Architecture"
permalink: /kb/177/Q177092/
---

## Q177092: FP: Overview of FrontPage Discussion Web Architecture

	Article: Q177092
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdtakbfaq
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q250626.
	
	For a Microsoft FrontPage 98 version of this article, see Q250839.
	
	SUMMARY
	=======
	
	This article describes which files and processes are needed to administer a
	FrontPage Discussion Web and offers tips for keeping a Discussion Web
	functioning correctly.
	
	MORE INFORMATION
	================
	
	The following main components provide the foundation for the FrontPage
	Discussion Web, assuming you selected the Use Threaded Replies option when you
	created the Discussion Web by using the Discussion Web Wizard.
	
	- WebBot Discussion component.
	- disc#_toc.htm or disc#_tocf.htm (framed), where disc# is the name of your
	  discussion Web.
	- Tocproto.htm.
	- Service.cnf.
	- The Discussion Web folder. By default, this folder is named _disc# where # is
	  the number of discussion webs that you have created so far.
	
	NOTE: In FrontPage 97 and earlier versions, you must not use upper case
	characters, and you must begin the folder name with an underscore (_) character.
	In contrast, you can use upper case letters in the Discussion Web folder name in
	FrontPage 98.
	
	All of these items will work only when used with the FrontPage Server
	Extensions.
	
	If any of these components are damaged or configured incorrectly, you may
	experience one or more of the following symptoms:
	
	- New posts will be appended to existing posts.
	- Messages will be threaded incorrectly.
	- Posted articles will not appear in the table of contents even when you
	  refresh the page.
	
	What Happens When an Article Is Submitted?
	------------------------------------------
	
	When you submit an article, the WebBot Discussion component does the following:
	
	1. Scans the Service.cnf file for an article number and converts this number to
	  hexadecimal.
	
	2. Creates the article using an eight-digit hexadecimal integer. For example,
	  00000001.htm or 0000000a.htm.
	
	3. Updates the Tocproto.htm file with threading structure and hyperlink
	  information.
	
	4. Uses the WebBot Include component in the Toc.htm file and copies the body of
	  the Tocproto.htm file to the Toc.htm file for threading structure. The
	  Toc.htm file contains a header (also included by a WebBot Include component),
	  which creates the Next, Previous, Up, Post, Search, and Reply hyperlinks.
	
	What is Tocproto.htm?
	---------------------
	
	The Tocproto.htm file is located in the _disc# folder. Note: This is only true if
	the discussion folder was not renamed. It has a specific architecture that is
	maintained by the WebBot Discussion component and changes every time an article
	is posted. For example, the HyperText Markup Language (HTML) code for the
	article structure initially looks similar to this:
	
	  <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
	     <html>
	
	     <head>
	     <meta http-equiv="Content-Type"
	     content="text/html; charset=iso-8859-1">
	     <meta name="FORMATTER" content="Microsoft FrontPage 2.0">
	     <meta name="GENERATOR" content="Microsoft FrontPage 2.0">
	     <title></title>
	     </head>
	
	     <body>
	
	     <dl>
	         <dt><!--webbot bot="FormInsertHere" startspan
	             descr="The WebBot FormInsertHere Component indicates the point
	     in an HTML file where you want a WebBot SaveResults, Registration, or
	     Discussion Component to insert new results." --><em>Form Results
	     Inserted Here</em><!--webbot
	             bot="FormInsertHere" i-checksum="34463" endspan --></dt>
	     </dl>
	     </body>
	     </html>
	
	After the first article is posted, the Tocproto.htm file will reflect the changes
	as follows.
	
	NOTE: To conserve space, only the body of the file is shown. The asterisks
	indicate the additions to the file. The position of a new thread is indented
	only once, and replies to that thread are indented even further.
	
	     <body>
	
	     * <dl>
	     *  <dt><b><a HREF="00000001.htm" NAME="00000001">Test</a></b><i>
	     *  Test 11/18/97</i></dt>
	     *  <dd><dl>
	     *     <dt><b><a HREF="00000002.htm" NAME="00000002">Re: Test</a></b><i>
	     *     Test 11/18/97</i></dt>
	     *      <dd><dl>
	     *          <!--webbot bot="FormInsertHere" S-RepliesTo="00000002"
	     *          startspan --><!--webbot bot="FormInsertHere" endspan
	     *          i-checksum="0" -->
	     *        </dl>
	     *      </dd>
	     *      <!--webbot bot="FormInsertHere" DESCR="The FrontPage
	     *      FormInsertHere Component indicates the point in an HTML file
	     *      where you want a default WebBot Registration or Discussion
	     *      component to insert new results." S-RepliesTo="00000001" startspan
	     *      --><!--webbot bot="FormInsertHere" endspan i-checksum="0" -->
	     *    </dl>
	     *  </dd>
	       </body>
	
	Notice below how the addition of another article (the reply) to that posting is
	indented.
	
	      <body>
	
	     * <dl>
	     *  <dt><b><a HREF="00000001.htm" NAME="00000001">Test</a></b><i>
	     *  Test 11/18/97</i></dt>
	     *  <dd><dl>
	     *     <dt><b><a HREF="00000002.htm" NAME="00000002">Re: Test</a></b><i>
	     *     Test 11/18/97</i></dt>
	     *      <dd><dl>
	     *          <!--webbot bot="FormInsertHere" S-RepliesTo="00000002"
	     *          startspan --><!--webbot bot="FormInsertHere" endspan
	     *          i-checksum="0" -->
	     *        </dl>
	     *      </dd>
	     *      <!--webbot bot="FormInsertHere" DESCR="The FrontPage
	     *      FormInsertHere Component indicates the point in an HTML file
	     *      where you want a default, Registration, or Discussion Component
	     *      to insert new results." S-RepliesTo="00000001" startspan
	     *      --><!--webbot bot="FormInsertHere" endspan i-checksum="0" -->
	     *    </dl>
	     *  </dd>
	        </body>
	
	A new thread posted to the discussion group will begin at a new indention and
	replies to that posting will appear indented under the new thread as shown
	above. This structure will continue throughout continuous replies and with
	replies to a reply.
	
	What Components Make the Tocproto.htm Work as it Does?
	------------------------------------------------------
	
	The Tocproto.htm file is comprised of three components:
	
	- <DT>, <DD>, <DL>
	- "FormInsertHere" (with the quotation marks)
	- s-repliesto=x
	
	<DT>, <DD>, <DL>:
	
	  where <DT> denotes Designated Term, <DD> denotes Designated
	  Definition, and <DL> denotes Designated List. Note that each of these
	  elements requires an ending tag (</DT>, </DD>, and </DL>).
	  These tags provide the formatting information that displays the threads
	  correctly.
	
	"FormInsertHere" (with the quotation marks):
	
	  The point at which the new article is inserted.
	
	s-repliesto=x:
	
	  This is an argument for the FormInsertHere component. It instructs the
	  particular instance of the component to accept replies to posts of a specific
	  article number.
	
	disc#_toc.htm or disc#_tocf.htm (framed)
	----------------------------------------
	
	The disc#_toc.htm file is used as the contents page of your discussion Web. The
	disc#_tocf.htm file is created when you use a frameset to create the discussion
	Web.
	
	Disc#_tocf.htm:
	
	  This file is used as the contents page of your discussion Web. The body of
	  the Tocproto.htm file (described above) is included in this page using the
	  WebBot Include component.
	
	Disc#_toc.htm:
	
	  This file is used as the contents page of your discussion Web. The body of
	  the tocproto.htm file, is included in this page using the WebBot Include
	  component. Unlike disc#_tocf.htm, this file also includes
	  _private/disc1_head.htm (header) and _private/disc1_foot.htm (footer).
	
	What is Service.cnf?
	--------------------
	
	The Service.cnf file is a configuration file located in the _vti_pvt folder in
	the current Web. This file contains information about the Discussion Web as well
	as other FrontPage Web specific configuration information. The section of this
	file that the Discussion Web directly relates to contains the article number
	variable. For example, if your discussion group is called "_bob", the
	configuration information will be stored in the _vti__bob_articlenumber key. The
	number will increment each time an article is submitted. If you change this
	number, you can alter the next article number. However, if you change this
	number so that it is less than the number of articles you have, newer articles
	will be appended or added to an existing article.
	
	NOTE: If you rename or modify a file in FrontPage Explorer, all subsequent links
	and configurations will be updated automatically. Because experimenting with the
	structure of your Discussion Web could cause it to function incorrectly, you
	should make these types of adjustments to a test Web first. When you have
	attained the desired results, check and recheck your Web before you implement
	the changes on your primary Web.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q154675 FP: How to Edit/Delete Articles in a FrontPage Discussion Web
	
	  Q169835 FP: Discussion Web Message Won't Keep Formatting after Posting
	
	  Q152097 FP: Files in Discussion Web Are Overwritten
	
	  Q143101 Using FrontPage Without the Server Extensions
	
	  Q176927 FP: Newest to Oldest Order Doesn't Work in Discussion Web
	
	Additional query words: 97 98 discussion Web functionality
	
	======================================================================
	Keywords          : kbdta kbfaq
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
