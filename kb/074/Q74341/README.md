---
layout: page
title: "Q74341: Creating Pen Windows Dictionaries"
permalink: /kb/074/Q74341/
---

## Q74341: Creating Pen Windows Dictionaries

{% raw %}

	Article: Q74341
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended to assist in the development of a custom dictionary
	used with Microsoft Pen Windows. Included in this article is information
	regarding the following:
	
	- The purpose of a dictionary
	
	- The flow of control for dictionary processing
	
	- An in-depth explanation of the dictionary messages
	
	- Some intended future changes
	
	Please review the following six sections in the "Microsoft Pen Windows Software
	Development Kit Guide to Programming" documentation before proceeding:
	
	1. The Dictionary Functions section of the Overview chapter.
	
	2. The DictionaryProc() function in the Pen API chapter.
	
	3. The DictionarySearch() function in the Pen API chapter.
	
	4. The rc.rglpdf, rc.clTryDicationary and rc.lRcOptions values in the Pen
	  Structures chapter.
	
	5. The SYV_Values (SYV) and the Symbol Graph (SYG) in the Pen Structures
	  chapter.
	
	6. The RCO_ constants in the Pen Messages chapter.
	
	Please note that the information in this article is intended to enhance the
	understanding of dictionaries.
	
	MORE INFORMATION
	================
	
	PURPOSE OF A DICTIONARY
	-----------------------
	
	A dictionary, in the Pen Windows context, is a dynamic-link library (DLL) with
	one exported function. This function, DictionaryProc(), is called with different
	subfunction identifiers to perform some service on the user's input. Typically,
	the DLL is intended to be used by an application during the recognition process
	to increase the chances of correctly interpreting what the user entered. To do
	this, an application can inform the system to call the dictionary before
	returning the WM_RCRESULT message, or it can call the dictionary itself to
	perform a post recognition search. A dictionary is completely optional and need
	not be used to produce tangible results from recognition.
	
	Dictionaries can perform a number of different services. The most common
	interpretation of how to use a dictionary is to look for an exact match in a
	list of words. A dictionary could also perform spell checking on a string,
	format checking of the string, and macro expansion on the string. Dictionaries
	are designed to be sufficiently flexible to satisfy a number of different
	services.
	
	Of all the services a dictionary can perform, the most common interpretation of
	the purpose of a dictionary is for word matching. With the Windows SDK,
	Microsoft has provided two dictionary DLLs: MAINDICT.DLL and USERDICT.DLL.
	MAINDICT.DLL is a general-purpose language dictionary providing, among other
	things, a facility to look up words of many European languages. USERDICT.DLL is
	a dictionary DLL and can be used to look up words using user-supplied word
	lists.
	
	THE FLOW OF CONTROL
	-------------------
	
	The control over when a dictionary is called can either be left with the system
	or exercised by the application. Both situations are important and need to be
	addressed.
	
	The simpler situation is to let the system control when the dictionary will be
	called. When an application sets the RC structure to be used during recognition,
	it does not need to change any of the default values to have the system call the
	default system dictionary. The variables in the RC structure that are of
	interest to the dictionary are: rc.lRcOptions, rc.rglpdf, rc.clTryDictionary,
	and possibly rc.dwDictParam. The following paragraphs explain these variables in
	more detail so an application can fine tune how the system will respond when
	calling the dictionary.
	
	rc.lRcOptions
	-------------
	
	This variable is used by both the recognizer and the dictionary. The RCO
	constants that pertain to the dictionary are RCO_NOSPACEBREAK and RCO_SUGGEST.
	The following two paragraphs explain how the application should use these
	constants.
	
	The RCO_NOSPACEBREAK constant specifies that when the system calls the dictionary
	it should not do any preprocessing of the information in regards to space
	breaks. If the user entered "hi there" and the RCO_NOSPACEBREAK flag is set, the
	dictionary should receive the string "hi there". If the flag is not set, the
	dictionary should receive two separate strings. The system will first ask the
	dictionary to identify the string "hi" and then it will ask it to process
	"there". RCO_NOSPACEBREAK should be used only in cases where white space is a
	significant part of the information. Usage of this flag in language strings
	processing could significantly slow down the look-up.
	
	If the constant RCO_SUGGEST is set, the system will call the dictionary with the
	DIRQ_SUGGEST message, but only under special circumstances. The DIRQ_SUGGEST
	message will be sent to the dictionary only if the RCO_SUGGEST option is set in
	the RC structure and the dictionary failed to return success when processing the
	DIRQ_STRING messages. The DIRQ_SUGGEST message is designed to be a message that
	is sent to the dictionary after the DIRQ_STRING messages have been processed.
	When the dictionary processes the DIRQ_STRING messages, it basically looks for
	the match in the word list that fits the enumeration that it received. The
	DIRQ_SUGGEST message is primarily designed for spell checking or macro expansion
	of the enumeration. For example, if the user enters "SDK" and the word "SDK" is
	not in the dictionary, then, if the RCO_SUGGEST flag is set, the dictionary will
	be called with the best enumeration of the string and it will be able to return
	its "best guess." In this case, the dictionary might return "Software
	Development Kit" instead of "SDK". If the RCO_SUGGEST flag is not set in the RC
	structure, this message will never be sent to the dictionary.
	
	rc.rglpdf
	---------
	
	Within the Pen Windows header file, PENWIN.H, this variable is an array of far
	addresses to dictionary functions. Currently, the system will support any number
	of dictionaries from zero to MAXDICTIONARIES (16). The number and order of these
	callback functions is important.
	
	If there are no dictionaries in the list, the system will use the "NULL"
	dictionary to extract the symbols from the symbol graph with the highest
	confidence level and it will return this with the WM_RCRESULT message. If there
	is one dictionary in the list, the system will call the dictionary with the
	DIRQ_STRING message for each enumeration of the symbol graph. For instance, if
	the symbol graph returned from the recognizer is "{1|l}ow", the dictionary will
	be called with each enumeration of the symbol graph -- "1ow" followed by "low".
	With each call, the dictionary has the option of either accepting or rejecting
	the input. If the input is not accepted, the system will continue to send
	enumerations to the dictionary until there are no more enumerations left. After
	all the enumerations have been sent, the system will call the dictionary with a
	DIRQ_STRING message with the lpIn parameter set to NULL to inform the dictionary
	that there are no more enumerations left. If the dictionary accepts the input,
	the system immediately sends the ending message DIRQ_STRING with lpIn set to
	NULL. If there is only one dictionary in the search list, this is when the
	system would send the DIRQ_SUGGEST message.
	
	If there are multiple dictionaries in the list, the system prioritizes which
	dictionary is called when by the dictionary's position in the list and the
	confidence of the enumeration. The system starts by getting the first
	enumeration of the symbol graph. For every enumeration, it calls the
	dictionaries starting with the one located at position zero with the DIRQ_STRING
	message. If the first dictionary in the list rejects the input, the second
	dictionary will be called with the same enumeration. This process continues
	until there are no more enumerations or a dictionary returns success. If at any
	time, one of the dictionaries reports a "match", the system will send a
	DIRQ_STRING message to every dictionary with lpIn set to NULL to indicate that
	the search is over. If no match if found, the system may then call the
	dictionaries with the DIRQ_SUGGEST message in the same order. As stated earlier,
	the DIRQ_SUGGEST message will be called only if the RCO_SUGGEST flag is set.
	
	rc.clTryDictionary
	------------------
	
	This variable should be set with the "cut off" threshold value to be used by the
	system when determining what symbol graph to send to the dictionary. Every
	character returned by the recognizer will have a confidence level associated
	with it. If that confidence level is less than the value of clTryDictionary,
	that character will not be included in any enumeration sent to the dictionary.
	For example, if the user enters "{1|l}ow" and the recognizer reports that the
	confidence level for "1" is 60 and the confidence for "l" is 40 when the "cut
	off" threshold, clTryDictionary, is 50, the dictionary will only be called with
	the symbol values "1ow". (NOTE: This process of enumeration using
	clTryDictionary is under refinement; it may change in some future prerelease.)
	
	rc.dwDictParam
	--------------
	
	This variable is reserved for dictionaries that require more specific information
	when called by the system. The information placed in this variable is passed on
	to the dictionary function as the ID parameter. Applications can use this
	variable to store information that might be very specific to the RC structure
	that the application is currently using. When using this variable, it is
	important that the application controls what dictionary will be called because
	the dwDictParam is sent to every dictionary in the list. For this reason, if
	this variable is used, the application should be aware of all the dictionaries
	in the list so that only the dictionaries that can support this ID value will
	receive the message.
	
	There are ways to invoke the dictionary other than placing the dictionary
	function callback address in the rc.rglpdf list. Every WM_RCRESULT message
	contains the symbol graph that represents that user's input. To simulate the
	operations of the system, an application can call the DictionarySearch()
	function and it will mimic the calls that the system makes before the
	application receives the WM_RCRESULT message. This can be useful for calling a
	dictionary with information that needs to be "recognized" in context. For
	example, if the user writes "at" on top of the "is" in the word "this", it might
	be useful to have the application defer the dictionary search until after it
	receives the WM_RCRESULT message. The application would then call the
	DictionarySearch() function with the symbol graph "that" instead of having the
	system call the dictionary with "at".
	
	MESSAGES
	--------
	
	When designing a dictionary, it is necessary to be aware of the messages that are
	required to support system services and the messages that support desired
	enhanced functionality. The most important message is the DIRQ_STRING message.
	If the dictionary is ever called by the system, it will be called with the
	DIRQ_STRING message. All other messages are optional.
	
	The messages, defined by Microsoft, can be combined into logical groups. There
	are basically three different types of messages: system messages, dynamic
	manipulation messages, and other messages. The system messages include:
	DIRQ_STRING, DIRQ_RCCHANGE, and DIRQ_SUGGEST. The dynamic manipulation messages
	include: DIRQ_ADD, DIRQ_CLOSE, DIRQ_DELETE, DIRQ_FLUSH, DIRQ_OPEN, DIRQ_SAVE,
	and DIRQ_SETWORDLISTS. Other messages include: DIRQ_CONFIGURE, DIRQ_DESCRIPTION,
	DIRQ_QUERY, and DIRQ_USER. The dictionary may support any number of these
	messages. The following few paragraphs describe the intent of the messages and
	when they might be used. Messages are listed alphabetically.
	
	DIRQ_ADD
	--------
	
	Used to build dictionaries dynamically. If a custom dictionary has been built
	that allows for dynamic expansion, it should process this message. As the name
	implies, the dictionary should add the word to the word list used by the
	dictionary. Keep in mind that the dictionary is responsible for managing the
	word list so it either has the option of saving the word list during the
	processing of this message or during the DIRQ_CLOSE message that may come at
	some, much later, time.
	
	DIRQ_CLOSE
	----------
	
	Used to close a dynamic word list. This message is intended to indicate that a
	particular word list will not be used any more; the dictionary should save the
	word list if any changes have been made to it by the DIRQ_ADD or DIRQ_DELETE
	message and remove the word list from the current list of options that may be
	used by the dictionary.
	
	DIRQ_CONFIGURE
	--------------
	
	If a dictionary chooses to process this message, it should display a dialog box
	that shows the configuration of the dictionary for the user to view and/or
	manipulate. This dialog box may contain information pertaining to the language
	that is currently selected, or perhaps, information about the word lists that
	are currently loaded. How this function is processed is defined by each
	dictionary.
	
	DIRQ_DELETE
	-----------
	
	Used to delete words from a dynamic dictionary. When processing this message, the
	dictionary should delete individual words in a particular word list used by the
	dictionary.
	
	DIRQ_DESCRIPTION
	----------------
	
	When this message is processed, the dictionary returns the name of the DLL that
	contains the DictionaryProc() function.
	
	DIRQ_FLUSH
	----------
	
	The dictionary will reinitialize its word list. This allows for dynamic
	restructuring of the dictionary's resources. Flushing essentially empties an
	entire word list from the dictionary but it does not remove the word list from
	the list of word lists that the dictionary supports.
	
	DIRQ_OPEN
	---------
	
	Used to open multiple word lists, which can be used singly or in combinations for
	look-up. When the dictionary processes this message, it should load a word list
	into memory so it can be accessed at some future time. Ultimately, dictionaries
	should be able to open more than one word list at a time. A good example of how
	this might work can be seen with a typical form application. In this example, an
	application loads a dialog box that pertains to an auto insurance form. It might
	call the dictionary to install five of six word lists pertaining to particular
	aspects of the form. For example, one list may contain all possible automobile
	manufacturers, another list might contain cars made by FORD, another might
	contain cars made by GM, and so on. After the dictionary loads the word lists,
	it should keep a unique identifier, a handle, for each list so the lists can be
	changed by the application by a call to the dictionary with DIRQ_SETWORDLISTS.
	
	DIRQ_QUERY
	----------
	
	Applications may call a dictionary with this message to determine which
	subfunctions the dictionary will support. The caller will call the dictionary to
	inquire if a particular message is supported.
	
	DIRQ_RCCHANGE
	-------------
	
	If a dictionary depends on information in the global RC structure, it might want
	to monitor this message. If any changes occur in the global RC structure, the
	system will send this message to every dictionary that is currently selected in
	the global RC structure. For any dictionary that is not listed in the global RC
	structure, the application can monitor the WM_GLOBALRCCHANGE message and update
	any custom RC structures that it has saved for particular situations. To do
	this, the application would send the DIRQ_RCCHANGE message to the dictionary
	itself to inform it of the change. Note that the Global RC structure could
	change at any time during the operation of Windows because it is affected by
	user input to the Control Panel.
	
	DIRQ_SAVE
	---------
	
	This message has been removed from the messaging scheme used by dictionaries as
	defined by the system. The functionality of the DIRQ_SAVE message is now
	included in the DIRQ_CLOSE message.
	
	DIRQ_SETWORDLISTS
	-----------------
	
	Used to dynamically manipulate the word lists for a dictionary. This message is
	used when toggling between word lists in a particular dictionary. If a
	dictionary loads more then one word list, as described in the DIRQ_OPEN message,
	the application will want to call the dictionary with this message immediately
	before calling the Recognize() function. This will give the dictionary the
	opportunity to set the default search list when the system calls the dictionary.
	For example, when the application receives the WM_LBUTTONDOWN message, it will
	call the dictionary with the DIRQ_SETWORDLISTS message to set the word list to
	match the edit field that the user is writing in. As an example, if the
	dictionary has two word lists, a list of American cars and a list of foreign
	cars, and the edit field asks the user to enter an the name of an American car,
	the application would call the dictionary with this message to inform it that it
	should use the American car word list for the next series of calls that it will
	be sent.
	
	DIRQ_STRING
	-----------
	
	This message was briefly discussed in the "Flow of Control" section above. When
	the system calls an active dictionary, it will send the dictionary this message.
	The dictionary should look for the best or exact "match" in its word list. A
	DIRQ_STRING is thought of as one of many in a sequence of DIRQ_STRING calls. If
	one DIRQ_STRING message is sent to the dictionary with lpIn set to something
	other than NULL, there will always be at least one more DIRQ_STRING message;
	either another DIRQ_STRING message with an enumeration of the symbol graph in
	the lpIn variable, or the DIRQ_STRING message with lpIn set to NULL. The
	DIRQ_STRING message with the lpIn variable set to NULL has special significance.
	This call marks that either a dictionary has returned a success code to a
	previous DIRQ_STRING message or that there are no more enumerations of the
	symbol graph left.
	
	DIRQ_SUGGEST
	------------
	
	This message was discussed above. If a dictionary is called with this message, it
	should provide its best guess as to what the symbol string is. The dictionary
	will be sent a string that represents that best symbol string for it to process.
	For the system to call the dictionary with this message, the rc.lRcOptions
	variable must be RCO_SUGGEST.
	
	DIRQ_USER
	---------
	
	The message is a place holder for dictionary specific subfunctions. The only time
	that the dictionary will see this message is when it is called explicitly by an
	application that is aware of the subfunction. For instance, a dictionary might
	have the ability to determine whether the first character in the symbol graph is
	uppercase. This functionality may be supported when processing the DIRQ_USER+1
	message within the dictionary. Therefore, the application might call the
	dictionary after receiving the WM_RCRESULT message with DIRQ_USER+1 to verify
	that the first letter is uppercase.
	
	FUTURE IMPLEMENTATION
	---------------------
	
	DIRQ_SYMBOLGRAPH will be added the DIRQ list. In a future prerelease, this will
	be the first message sent to a dictionary by the system. It will give the
	dictionary the ability to parse the symbol graph and return an answer before the
	system starts enumerating the symbol graph.
	
	Also note that the meaning of the clTryDictionary value is being redefined. It
	may change in a future release.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
